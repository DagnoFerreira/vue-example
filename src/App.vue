<template>
  <div id="app" v-md-theme="currentTheme">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleMainNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h1 class="md-title" style="flex: 1">Hey Oh</h1>

      <md-button class="md-icon-button" @click="toggleSearchPanel">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <md-tabs md-fixed md-elevation="1">
      <md-tab v-for="tab in tabs" :md-label="tab.label" :md-icon="tab.icon">{{ tab.content }}</md-tab>
    </md-tabs>

    <md-sidenav class="md-left md-fixed main-navigation" ref="mainNav">
      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <span>Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon>email</md-icon>
          <span>Inbox</span>

          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">Inner Item</md-list-item>
              <md-list-item class="md-inset">Inner Item 2</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-sidenav class="md-right md-fixed search-panel" ref="searchPanel">
      <md-input-container>
        <label for="search">Search</label>
        <md-input type="search" name="search" id="search"></md-input>
      </md-input-container>
    </md-sidenav>

    <md-bottom-bar md-shift>
      <md-bottom-bar-item v-for="tab in tabs" :md-icon="tab.icon" @click="currentTheme = tab.theme">{{ tab.label }}</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<style>
  .search-panel .md-sidenav-content {
    padding: 24px;
  }

  .md-bottom-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        currentTheme: 'default',
        tabs: [
          {
            label: 'First Tab',
            icon: 'home',
            theme: 'indigo',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, suscipit, harum doloribus voluptatem unde sunt tenetur amet quidem culpa fugit rem quas provident, id labore. Cumque sit natus velit quas?'
          },
          {
            label: 'Second Tab',
            icon: 'local_florist',
            theme: 'default',
            content: 'Lorem ipsum dolor sit amet'
          },
          {
            label: 'Third Tab',
            icon: 'near_me',
            theme: 'brown',
            content: 'My content'
          }
        ]
      };
    },
    methods: {
      toggleMainNav() {
        this.$refs.mainNav.toggle();
      },
      toggleSearchPanel() {
        this.$refs.searchPanel.toggle();
      }
    }
  };
</script>
