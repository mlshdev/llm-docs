> Pinned source for Vast.ai main: [blender-in-the-cloud.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/blender-in-the-cloud.mdx)
> Canonical documentation: https://docs.vast.ai/blender-in-the-cloud

# Blender in the Cloud

Blender is a free, open source 3D creation suite. It can be used to create animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and video games. It supports the entirety of the 3D pipeline-modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation. You can find more information about Blender at [blender.org](https://www.blender.org/).

Animators, game developers, 3D modelers, visual effects artists, architects, and product designers are some people who use Blender.

GPUs can speed up rendering in Blender.

## Step 1 - Open Blender in the Cloud Template

Click on this link [Blender in the Cloud Template](https://cloud.vast.ai?ref_id=142678\&template_id=5846e4535b1ff5db56024c1c0711a0ce) to select the kasmweb/blender in the cloud template.

## Step 2 - \[Optional] Check the Secure Cloud box

You can narrow your search results to only data center machines if you want insured security standards from our trusted datacenters.

![Highlighted Secure Cloud](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/highlighted-secure-cloud.webp)

## Step 3 - Filter for a GPU that you feel best suits your needs

If you have questions about which GPU to choose, there is some data around NVIDIA Geforce RTX 4090 giving the best render speed with Blender. You can find other GPUs that work well with Blender here [Blender GPU Benchmarks](https://opendata.blender.org/benchmarks/query/?group_by=device_name\&blender_version=3.6.0). You can also find other options by searching on Google or asking ChatGPT.

The version of Blender running within Vast while using the template linked above at the time of this writing is 3.6.2.

Go to the GPUs filter and check the box for RTX 4090 or another GPU instance.

For example,

![Highlighted Rtx 4090 Filter Pic](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/highlighted-rtx-4090-filter-pic.webp)

## Step 4 - Choose a GPU by Clicking "RENT"

Choose a GPU that meets your budget, desired reliability %, and other constraints by clicking "RENT". GPUs are sorted by a complex proprietary algorithm that aims to give users the best machines for their value by default.
You can filter GPUs further per your requirements if desired.

![Highlighted Rent](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/highlighted-rent.webp)

## Step 5 - Use Jupyter Direct HTTPS Launch Mode

Follow the instructions related to adding a certificate to your browser if you need to when it asks you to "Setup Jupyter Direct HTTPS" and click "CONTINUE". Here's more information on the Jupyter direct HTTPS Launch Mode and Installing the TLS certificate: [Jupyter](https://docs.vast.ai/guides/instances/jupyter)&#x20;

![Updated Jupyter Direct Https Continue](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/updated-jupyter-direct-https-continue.webp)

## Step 6 - Open Blender

Go to the Instances tab to see your instance being created with it "Creating". When the message on the blue button changes to "Open", click on Open to open Blender.

![Original Open Jupyter Notebook](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-original-open-jupyter-notebook.webp)

Here's more info about instances at Vast if you need to reference it: [Instances Guide](https://docs.vast.ai/guides/instances/managing-instances)&#x20;

If you see an error that says something like "'clipboard-read' is not a valid value for enumeration PermissionName", please close that window.

You should now see Blender!

![Blender In The Cloud](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-blender-in-the-cloud.webp)

## Step 7 - Upload .blend file(s) through Jupyter Notebook

Click the Jupyter Notebook button to open Jupyter Notebook.

![Jupyter Notebook Button](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/jupyter-notebook-button.webp)

Go to your Jupyter Notebook, click the upload button on the top right, and upload one of your .blend files from your local computer to a directory in the Jupyter Notebook.
In this case, I'm uploading basic\_particle\_simulation.blend to the Desktop directory.

![Original Upload Blend File To Jupyter](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-original-upload-blend-file-to-jupyter.webp)

\\

![Highlighted Upload](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-highlighted-upload.webp)

## Step 8 - Open .blend file in Blender

Go back to the tab where Blender is running, click on File, click on Open, find your file, and open it. In this case, my basic\_particle\_simulation.blend is in the Desktop directory since that's where I uploaded it in Jupyter Notebook

![Open File](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-open-file.webp)

## Step 9 - Work on Your .blend file in Blender!

1. There you go! You should now able to see your .blend file in Blender in the Cloud using Vast.

![Particle Simulation Blend](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-particle-simulation-blend.webp)

## Step 10 - Download files as needed from Jupyter Notebook

1. You can save files in Blender and download them by selecting the file(s) and clicking the Download button in Jupyter Notebook.

![Highlighted File To Download](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-in-the-cloud-highlighted-file-to-download.webp)
