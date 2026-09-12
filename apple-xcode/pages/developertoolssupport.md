> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport](https://developer.apple.com/documentation/developertoolssupport)

# DeveloperToolsSupport

**Framework:** DeveloperToolsSupport  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Expose custom views and modifiers in the Xcode library.

<a id="Overview"></a>

## Overview

Using the DeveloperToolsSupport framework, you tell Xcode about your custom SwiftUI views and view modifiers. After adding your views and modifiers, Xcode makes them available to you when you click the Library button (`+`) in Xcode’s toolbar. You can select and drag the custom library items into code, just like you would for system-provided items.

To add items to the library, create a structure that conforms to the [LibraryContentProvider](developertoolssupport/librarycontentprovider.md) protocol and encapsulate any items you want to add as [LibraryItem](developertoolssupport/libraryitem.md) instances. Implement the [views](developertoolssupport/librarycontentprovider/views.md) computed property to add library items containing views. Implement the [modifiers(base:)](developertoolssupport/librarycontentprovider/modifiers%28base_%29.md) method to add items containing view modifiers. Xcode harvests items from all of the library content providers in your project as you work, and makes them available to you in its library.

## Topics

### Library customization

- [LibraryContentProvider](developertoolssupport/librarycontentprovider.md): A source of Xcode library and code completion content.
- [LibraryItem](developertoolssupport/libraryitem.md): A single item to add to the Xcode library.

### Preview definition

- [Preview](developertoolssupport/preview.md): A base type that preview macros use to create previews.
- [PreviewLayout](developertoolssupport/previewlayout.md): A size constraint for a preview.
- [PreviewTrait](developertoolssupport/previewtrait.md): Customizations that you can apply to a preview.
- [PreviewRegistry](developertoolssupport/previewregistry.md): A protocol that the system uses to locate previews at runtime.

### Preview camera management

- [PreviewCamera](developertoolssupport/previewcamera.md): A camera that defines a viewpoint in a preview.
- [PreviewCameraBuilder](developertoolssupport/previewcamerabuilder.md): A builder type that composes a collection of cameras for previewing a view in a 3D scene.

### Resource definition

- [ColorResource](developertoolssupport/colorresource.md): A color resource.
- [ImageResource](developertoolssupport/imageresource.md): An image resource.

### Structures

- [PreviewArguments](developertoolssupport/previewarguments.md)
- [PreviewBodyBuilder](developertoolssupport/previewbodybuilder.md): Builder for preview body content within a `#Preview` macro.
- [PreviewMacroBodyBuilder](developertoolssupport/previewmacrobodybuilder.md): Builder for preview body content within a `#Preview` macro.
