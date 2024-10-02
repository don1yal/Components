import DButtons from '../components/Forms/Buttons/DButtons.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: DButtons,
  title: 'Inputs/DButtons',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { DButtons },
    props: Object.keys(argTypes),
    template: '<DButtons v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};