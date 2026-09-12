> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi](https://developer.apple.com/documentation/classkitcatalogapi)

# ClassKit Catalog API

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Web Service  
**Availability:** ClassKit 1.0+

Declare the activities supported by your educational app through a web interface.

<a id="overview"></a>

## Overview

Access the ClassKit Catalog API from your computer or server to declare an app’s educational activities when you have an app that adopts the [ClassKit](classkit.md) framework. Traditionally your app declares its activities — represented as contexts — to the ClassKit framework at run time so that teachers can assign the activities using the [Schoolwork](https://apps.apple.com/us/app/schoolwork/id1355112526) app. As an alternative, the ClassKit Catalog API lets you declare contexts ahead of time to a central server so that:

- Teachers can browse your app’s activities in the Schoolwork app before running your app for the first time on their device.
- You can include keywords describing your activities that help teachers find your content.
- Your app can support a large number of assignable activities without the app having to declare all the content to the ClassKit framework at run time.

Content that you upload to the ClassKit Catalog API becomes publicly available to all teachers using the Schoolwork app. If you have dynamically-generated or user-specific content, continue to publish that only through the ClassKit framework.

## Topics

### Essentials

- [Authenticating Calls to the ClassKit Catalog API](classkitcatalogapi/authenticating-calls-to-the-classkit-catalog-api.md): Establish your identity to the ClassKit Catalog server by providing a cryptographically signed token for each call.
- [Testing Your ClassKit Catalog Implementation](classkitcatalogapi/testing-your-classkit-catalog-implementation.md): Verify your server interaction before deployment by operating in a development environment.

### Declaring Contexts

- [Preparing Context Data](classkitcatalogapi/preparing-context-data.md): Adjust how you manage context data when working with the web API.
- [Create or Replace Contexts](classkitcatalogapi/create-or-replace-contexts.md): Store information about the assignable content that your educational app provides.
- [Get a Context](classkitcatalogapi/get-a-context.md): Fetch information that you previously stored about your app’s assignable activities.
- [Delete a Context](classkitcatalogapi/delete-a-context.md): Remove information that you previously stored about your app’s assignable activities.
- [Context](classkitcatalogapi/context.md): An area of your app that represents an assignable task, like a quiz or a chapter.
- [ContextsRequest](classkitcatalogapi/contextsrequest.md): A request that you make when modifying context information.
- [ContextsResponse](classkitcatalogapi/contextsresponse.md): The response you receive after modifying context information.

### Uploading Thumbnails

- [Create or Replace a Thumbnail](classkitcatalogapi/create-or-replace-a-thumbnail.md): Store an image that represents one of your app’s assignable activities.
- [Get a Thumbnail](classkitcatalogapi/get-a-thumbnail.md): Fetch the image for one of your app’s assignable activities.
- [Delete a Thumbnail](classkitcatalogapi/delete-a-thumbnail.md): Remove one of the images for your app’s assignable activities.

### Retrieving Status

- [Get Status](classkitcatalogapi/get-status.md): Fetch the status of an operation that you initiated earlier.
- [Status](classkitcatalogapi/status.md): The state of a request that the API previously accepted, but didn’t complete right away.
