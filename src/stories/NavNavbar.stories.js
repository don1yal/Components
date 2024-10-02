import NavNavbar from '../components/Navigation/NavNavbar.vue'

//👇 This default export determines where your story goes in the story list
export default {
  component: NavNavbar,
  title: 'Navigation/NavNavbar',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { NavNavbar },
    props: Object.keys(argTypes),
    template: '<NavNavbar v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};