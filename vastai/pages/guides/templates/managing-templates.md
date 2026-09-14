> Pinned source for Vast.ai main: [guides/templates/managing-templates.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/guides/templates/managing-templates.mdx)
> Canonical documentation: https://docs.vast.ai/guides/templates/managing-templates

# Managing Templates

## Updating a Template

If you want to make changes to a template you previously saved, simply navigate back to the templates page and select 'My Templates'.  Here you'll be able to make your changes by clicking the pencil icon.

![My templates showing the NVIDIA CUDA - Demo template](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-templates-16.webp)

## Sharing a Template

It's really easy to share your template with other users.  We have two special links you can use and both include your referral code so you can earn if new users sign up - Find more about that [here](https://docs.vast.ai/guides/reference/referral-program).

To share, click the three dots icon in the bottom right of the template card.

![Menu shows sharing options](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/console-templates-17.webp)

### Copy referral link

This will copy a link that contains your referral ID, creator ID and the template name.  It will always point to the most recent template you created with this name - Really useful if you want people clicking the link to always get the most recent version.

### Copy template link&#x20;

This will copy a link containing your referral ID and the template hash ID.  It points to this specific template at this point in time. &#x20;

Templates all have a unique hash after every save.  This is useful as it allows you to find a previous version if you have tracked the hash ID, but for sharing you probably want the referral link above.

> **Note**
>
> Remember to add a comprehensive Readme to your template if you're going to share it.  This will help users to get started easily.

## Troubleshooting

- If your image is built for a different CPU architecture than your Vast machine, then it won't work. You can try to find a machine with the required CPU architecture using our GUI or [CLI](https://docs.vast.ai/cli/hello-world).
- If your image requires a higher CUDA version, then look for a machine with a higher Max CUDA version. The Max CUDA version can be found on the instance card.&#x20;
- If your image is built to run jupyter, then try running it on a port different than 8080.
- If you are having issues using ssh launch mode, add your public key to \~/.authorized\_keys, install openssh, start openssh when the container starts, and forward the ssh server's port.
