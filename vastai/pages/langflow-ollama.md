> Pinned source for Vast.ai main: [langflow-ollama.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/langflow-ollama.mdx)
> Canonical documentation: https://docs.vast.ai/langflow-ollama

# Langflow + Ollama

Langflow is a node-based agent builder you can use from your web browser.  While it integrates with many frontier language models it also has a fantastic Ollama integration which makes it really easy to use with open weight models as well as custom fine-tunes.

We have two templates you can choose for this guide.  The **Langflow template** provides both Ollama and Langflow installed within the instance.  You can also use the [**Ollama standalone template**](https://cloud.vast.ai/?ref_id=62897\&creator_id=62897\&name=Ollama) to integrate with a local langflow installation via [ssh local port forwarding](https://docs.vast.ai/guides/instances/sshscp#Yj5Wh).  The choice is yours. For this guide we will use the Langflow bundled template.

Before moving on with the guide,**&#x20;Setup your Vast account and add credit**. Review the [quickstart guide](https://docs.vast.ai/guides/get-started/quickstart) to get familar with the service if you do not have an account with credits loaded.

## Initial Setup

Let's get started with the configuration - There is not much you need to change here but it's a good idea to create a customized version of the template so Ollama automatically downloads your preferred model.

### Find the Template

You can find the Langflow template in our [recommended templates](https://cloud.vast.ai/templates/) page.  Before loading it up, click the pencil icon to open up the template editor

![Langflow template card](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents.webp)

### Custom configuration

In the template editor you'll find two really useful configuration variables.

- `OLLAMA_MODEL` is the most important variable.  Here you can choose which model should be downloaded when the instance starts.
- `LANGFLOW_ARGS`allows you to pass alternative startup arguments to the langflow application.  The defaults should be fine for this demo, but you are free to change these as you need.

![](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-2.webp)

When you have finished entering your settings click the '**Create & Use**' button to save your copy of the template.

You'll be taken to the search interface where you can choose an appropriate GPU instance to run your model.  You can access your custom template in future from the 'My Templates' section of the templates page.

## Starting the Instance

It's now time to use your template to start a GPU instance.

### Choose a GPU

The most important consideration when picking an instance to run language models is the VRAM.  For best performance, your model weights must fit into the GPU VRAM with room left over for the context window.&#x20;

You do not have to use a single GPU when running LLMs - Sometimes a multi-GPU setup can be as effective of better than a single high VRAM instance.

### Rent an Instance

When you have found a suitable instance it's time to click the '**Rent**' button.  This will start the loading phase.

> **Note**
>
> If you are not sure which instance to choose - Try one.  There is no minimum rental period and if it is not suitable you are able to destroy that instance and start another, paying only for the time the instance was in the 'running' state

## Accessing the Instance

After a short time, your instance will be ready to access.  Simply click the 'Open' button to get started.

![](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-3.webp)

You will now find the Instance Portal has opened.&#x20;

![Instance Portal](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-4.webp)

This page gives you easy access to both the Langflow application and the Ollama API.  Click Langflow's 'Launch Application' button.&#x20;

> **Note**
>
> It will take some time for Langflow and Ollama to be installed and for the Ollama model to download.  You can monitor the loading status in the Instance Portal 'Logs' tab&#x20;

## Getting Started with Langflow

After opening Langflow, click the '**Create first flow**' button.

![](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-5.webp)

While Langflow is extremely powerful, for this example we will create a simple blow post writer.

Select **Content Generation** -> **Blog Writer**

![](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-6.webp)

Initially, the flow will look like this

![blog writer flow](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-7.webp)

We will need to replace the Language Model with the Ollama alternative to make use of the GPU and avoid having to make API calls to external services.&#x20;

Click on the **Language Model** node and using the three dot icon, choose **Delete.**

![delete language model](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-8.webp)

Next, from the left side menu, select the **Ollama** component and drag it to the space created by deleting the original language model component.

![Add Ollama node](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-9.webp)

Now that is in place it must be configured to communicate with the Ollama API. Enter `http://localhost:11434` in the Base URL field.  You'll need to then select your Ollama model and re-connect the nodes as shown below.

![Ollama node connected](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-10.webp)

> **Note**
>
> If the model field does not immediately show your available models, simply toggle the 'Tool Mode Enabled' switch.

### Configuring the Workflow

You could run this node immediately, but first let's make some minor modifications.

Change the **URL** in the **URL node** to `https://vast.ai`and set the **Depth** to `2`

Change the **Text** in the **Instructions node** to `Use the references above for style to write a new blog/tutorial about how Vast.ai can empower people who want to leverage affordable GPU resources`

### Run the Workflow

Simply click the **Playground** button followed by the **Run flow** button and wait for the agent to learn about the subject matter and write a blog post.  It'll only take a few seconds.

![Completed Blog Post](https://raw.githubusercontent.com/vast-ai/docs/efed71d49da6451aeb4f9be763c284bb555cd206/images/use-cases-ai-agents-11.webp)

## Advanced Usage

This short guide serves only as an introduction to Langflow, but it is extremely capabale and easy to use with some practice.  We recommend that you check out the excellent [documentation](https://docs.langflow.org/about-langflow) to assist you in creating complex projects.

Remember, any *Language Model* component can be replaced with the *Ollama* component, and any *Agent* component can be configured to use *Ollama* as a custom provider.
