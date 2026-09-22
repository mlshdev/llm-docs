> Pinned source for Vast.ai main: [blender-batch-rendering.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/blender-batch-rendering.mdx)
> Canonical documentation: https://docs.vast.ai/blender-batch-rendering

# Blender Batch Rendering

Blender is a free, open source 3D creation suite. It can be used to create animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and video games. It supports the entirety of the 3D pipeline-modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation. You can find more information about Blender at [blender.org](https://www.blender.org/).

Animators, game developers, 3D modelers, visual effects artists, architects, and product designers are some people who use Blender.

GPUs can speed up rendering in Blender.

You can save time by automating away the rendering of animations for batch of blend files.

## Step 1 - Open Vast's Blender Batch Renderer Template

Click on this link [Blender Batch Renderer Template](https://cloud.vast.ai/?ref_id=142678\&template_id=7b570ea8454e5f2b4b026139709fa0e8) to select the vast/blender-batch-renderer template.

## Step 2 - Check the Secure Cloud box if you want a secure machine from trusted datacenters (Optional)

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

Follow the instructions related to adding a certificate to your browser if you need to when it asks you to "Setup Jupyter Direct HTTPS" and click "CONTINUE". Here's more information on the Jupyter direct HTTPS Launch Mode and Installing the TLS certificate: [Jupyter](https://docs.vast.ai/guides/instances/jupyter).

![Updated Jupyter Direct Https Continue](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/updated-jupyter-direct-https-continue.webp)

## Step 6 - Click the Open Button or Jupyter Notebook button to open Jupyter Notebook

![Jupyter Notebook Button](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/jupyter-notebook-button.webp)

## Step 7 - To Render Animation For Each Blend File In Batch Of Blend Files

If you want to render a respective animation for each blend file in a batch of blend files, follow the following steps.

Go to /Desktop/render\_animation\_for\_each\_blend\_file\_in\_batch\_of\_blend\_files/ folder in Jupyter Notebook

![Go Render Animation For Batch Folder](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-go-render-animation-for-batch-folder.webp)

Upload .blend files to /Desktop/render\_animation\_for\_each\_blend\_file\_in\_batch\_of\_blend\_files/ folder

![Upload 100 Color Vortex](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-upload-100-color-vortex.webp)

\\

![Upload Render Animation Batch Highlighted](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-upload-render-animation-batch-highlighted.webp)

Open render\_animation\_for\_each\_blend\_file\_in\_batch\_of\_blend\_files.ipynb

![Open Render Animation For Batch Folder Notebook](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-open-render-animation-for-batch-folder-notebook.webp)

Click the Run tab and click Run All Cells

![Show Rendering Animations](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-show-rendering-animations.webp)

\\

![Click Run All Cells Highlighted](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-click-run-all-cells-highlighted.webp)

Now a corresponding animation will be rendered for each .blend file you have uploaded to this folder.
You can also close out your jupyter notebook tab in your browser and this notebook will keep running as long as your instance in Vast is running.

## Step 8 - To Render Animation For Xth Frame of Each Blend File In Batch Of Blend Files

If you want to render a respective animation for the Xth frame of each blend file in a batch of blend files, follow the following steps.

Go to /Desktop/render\_Xth\_frame\_of\_batch\_of\_blend\_files/ folder in Jupyter Notebook

![Go To Render Xth Frame For Batch Folder](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-go-to-render-xth-frame-for-batch-folder.webp)

Upload .blend files to /Desktop/render\_Xth\_frame\_of\_batch\_of\_blend\_files/ folder

![Upload Blend Files For Xth Frame](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-upload-blend-files-for-xth-frame.webp)

\\

![Upload Xth Frame Highlighted](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-upload-xth-frame-highlighted.webp)

Open render\_Xth\_frame\_of\_batch\_of\_blend\_files.ipynb

![Open Render Animation For Each Blend File In Batch Of Blend Files Ipynb](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-open-render-animation-for-each-blend-file-in-batch-of-blend-files-ipynb.webp)

Set frame\_number equal to a particular frame number. For ex. frame\_number=2

![Set Frame Number 2](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-set-frame-number-2.webp)

Click the Run tab and click Run All Cells

![Xth Frames Rendering](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-xth-frames-rendering.webp)

\\

![Run All Cells Xth Frame Highlighted](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/blender-batch-rendering-run-all-cells-xth-frame-highlighted.webp)

Now a corresponding animation will be rendered for each Xth frame of each .blend file you have uploaded to this folder.
You can also close out your jupyter notebook tab in your browser and this notebook will keep running as long as your instance in Vast is running.
