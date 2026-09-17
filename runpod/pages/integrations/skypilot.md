> Pinned source for Runpod main: [integrations/skypilot.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/integrations/skypilot.mdx)
> Canonical documentation: https://docs.runpod.io/integrations/skypilot

# Running Runpod on SkyPilot

Use SkyPilot to run LLMs, AI, and batch jobs on Runpod Pods and Serverless endpoints. Review configuration and usage guidance for this Runpod integration.

[SkyPilot](https://skypilot.readthedocs.io/en/latest/) is a framework for running LLMs, AI, and batch jobs on any cloud.

This integration uses the Runpod CLI infrastructure to spin up on-demand Pods and deploy Serverless endpoints with SkyPilot.

## Get started

1. Get your API key from the [Runpod Settings](https://www.console.runpod.io/user/settings) page.
2. Install the latest version of Runpod:

   ```sh
   pip install "runpod>=1.6"
   ```
3. Run `runpod config` and paste your API key when prompted.
4. Install the [SkyPilot Runpod cloud](https://skypilot.readthedocs.io/en/latest/getting-started/installation.html#runpod):

   ```sh
   pip install "skypilot-nightly[runpod]"
   ```
5. Run `sky check` to verify your credentials are set up correctly.

## Run a project

1. Create a new directory for your project:

   ```sh
   mkdir hello-sky
   cd hello-sky
   ```
2. Create a file named `hello_sky.yaml` with the following content:

   ```yml
   resources:
     cloud: runpod

   # Working directory (optional) containing the project codebase.
   # Its contents are synced to ~/sky_workdir/ on the cluster.
   workdir: .

   # Setup commands (optional).
   # Typical use: pip install -r requirements.txt
   # Invoked under the workdir (i.e., can use its files).
   setup: |
     echo "Running setup."

   # Run commands.
   # Typical use: make use of resources, such as running training.
   # Invoked under the workdir (i.e., can use its files).
   run: |
     echo "Hello, SkyPilot!"
     conda env list
   ```
3. Launch your project on the cluster:

   ```sh
   sky launch -c mycluster hello_sky.yaml
   ```
4. You'll see the available GPU options. Confirm your GPU type and the cluster will start spinning up.
