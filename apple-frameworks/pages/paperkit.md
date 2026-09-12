> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit](https://developer.apple.com/documentation/paperkit)

# PaperKit

**Framework:** PaperKit  
**Kind:** Framework  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Add drawings, shapes, and a consistent markup experience to your app.

<a id="overview"></a>

## Overview

PaperKit builds on top of [PencilKit](pencilkit.md) to deliver a comprehensive markup experience. It adds a layer of elements — including shapes, images, and text boxes — to help create a unified canvas that supports both drawing and annotation. PaperKit powers the markup experience across all Apple platforms, and provides an easy way to add rich markup capabilities to any app.

PaperKit consists of three main components that work together to deliver a complete markup experience. [PaperMarkupViewController](paperkit/papermarkupviewcontroller.md) serves as the primary markup controller that interactively creates and displays PaperKit elements alongside PencilKit content. [PaperMarkup](paperkit/papermarkup.md) acts as the data model container that handles saving, loading, and rendering both markup elements and PencilKit drawing data. [MarkupEditViewController](paperkit/markupeditviewcontroller.md) (in iOS, iPadOS, and visionOS) and [MarkupToolbarViewController](paperkit/markuptoolbarviewcontroller.md) (in macOS) provide platform-specific insertion menus for adding markup elements.

Configure PaperKit to match your app’s specific needs by providing a [FeatureSet](paperkit/featureset.md) to control which markup tools and capabilities are available. Enable HDR support for stunning visual content, set custom background views, and fine-tune the markup experience to align perfectly with your app’s design and functionality.

## Topics

### Essentials

- [Integrating PaperKit into your app](paperkit/getting-started-with-paperkit.md): Create your first markup experience by setting up a view controller, adding markup editing tools, and implementing data persistence.

### View controllers

- [PaperMarkupViewController](paperkit/papermarkupviewcontroller.md): A view controller for interactively creating and showing markup.
- [MarkupEditViewController](paperkit/markupeditviewcontroller.md): A view controller that manages the interface for inserting content into a canvas.
- [MarkupToolbarViewController](paperkit/markuptoolbarviewcontroller.md)

### Configuration

- [FeatureSet](paperkit/featureset.md): The features PaperKit supports in its UI and data models.
- [ShapeConfiguration](paperkit/shapeconfiguration.md): A configuration that specifies the appearance of a shape.
- [RenderingOptions](paperkit/renderingoptions.md): The rendering options for drawing paper data models.
- [MarkupAutoresizing](paperkit/markupautoresizing.md): Automatic sizing behaviors for this markup.

### Data model

- [PaperMarkup](paperkit/papermarkup.md): The data model object for storing markup data created from a `PaperViewController`.
- [MarkupOrderedSet](paperkit/markuporderedset.md): An ordered set of markup elements.
- [MarkupID](paperkit/markupid.md): An opaque ID for markup elements.

### Markup elements

- [Markup](paperkit/markup.md): A markup component.
- [ImageMarkup](paperkit/imagemarkup.md): A markup element that represents an image.
- [ShapeMarkup](paperkit/shapemarkup.md): A markup element that represents a shape or text box with customizable appearance and behavior.
- [LinkMarkup](paperkit/linkmarkup.md): A URL link that a person can tap on in the canvas.
- [LoupeMarkup](paperkit/loupemarkup.md): A loupe magnifier that magnifies the content below the loupe.
- [MarkupInteractions](paperkit/markupinteractions.md): Interactions that people can perform on markup elements.

### Adornments

- [MarkupAdornment](paperkit/markupadornment.md): A visual adornment that appears on top of markup content within a markup view controller.

### Error handling

- [MarkupError](paperkit/markuperror.md): The error thrown for encoding / decoding data models.
