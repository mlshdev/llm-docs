> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutguide](https://developer.apple.com/documentation/appkit/nslayoutguide)

# NSLayoutGuide (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A rectangular area that can interact with Auto Layout.

## Declaration

```swift
class NSLayoutGuide
```

<a id="overview"></a>

## Overview

Use layout guides to replace the placeholder views you may have created to represent inter-view spaces or encapsulation in your user interface. Traditionally, there were a number of Auto Layout techniques that required placeholder views. A placeholder view is an empty view that does not have any visual elements of its own and serves only to define a rectangular region in the view hierarchy. For example, if you wanted to use constraints to define the size or location of an empty space between views, you needed to use a placeholder view to represent that space. If you wanted to center a group of objects, you needed a placeholder view to contain those objects. Similarly, placeholder views could be used to contain and encapsulate part of your user interface. Placeholder views let you break up a large, complex user interface into self-contained, modular chunks. When used properly, they could greatly simplify your Auto Layout constraint logic.

There are a number of costs associated with adding placeholder views to your view hierarchy. First, there is the cost of creating and maintaining the view itself. Second, the placeholder view is a full member of the view hierarchy, which means that it adds overhead to every task the hierarchy performs. Worst of all, the invisible placeholder view can intercept messages that are intended for other views, causing problems that are very difficult to find.

The [NSLayoutGuide](nslayoutguide.md) class is designed to perform all the tasks previously performed by placeholder views, but to do it in a safer, more efficient manner. Layout guides are not views. They do not use as much memory, and they do not participate in the view hierarchy. Instead, they simply define a rectangular region in their owning view’s coordinate system that can interact with Auto Layout.

<a id="Creating-Layout-Guides"></a>

### Creating Layout Guides

To create a layout guide, perform the following steps:

1. Instantiate a new layout guide.
2. Add the layout guide to a view by calling the view’s [addLayoutGuide(\_:)](nsview/addlayoutguide%28__%29.md) method .
3. Define the position and size of the layout guide using Auto Layout.

You can use these guides to define the space between elements in your layout. The following example shows how to use layout guides to define an equal spacing between a series of views.

**Swift**

```swift
let space1 = NSLayoutGuide()
view.addLayoutGuide(space1)
 
let space2 = NSLayoutGuide()
view.addLayoutGuide(space2)
 
space1.widthAnchor.constraintEqualToAnchor(space2.widthAnchor).active = true
saveButton.trailingAnchor.constraintEqualToAnchor(space1.leadingAnchor).active = true
cancelButton.leadingAnchor.constraintEqualToAnchor(space1.trailingAnchor).active = true
cancelButton.trailingAnchor.constraintEqualToAnchor(space2.leadingAnchor).active = true
clearButton.leadingAnchor.constraintEqualToAnchor(space2.trailingAnchor).active = true
```

**Objective-C**

```objc
NSLayoutGuide *space1 = [[NSLayoutGuide alloc]init];
[self.view addLayoutGuide:space1];
 
NSLayoutGuide *space2 = [[NSLayoutGuide alloc] init];
[self.view addLayoutGuide:space2];
 
[space1.widthAnchor constraintEqualToAnchor:space2.widthAnchor].active = YES;
[self.saveButton.trailingAnchor constraintEqualToAnchor:space1.leadingAnchor].active = YES;
[self.cancelButton.leadingAnchor constraintEqualToAnchor:space1.trailingAnchor].active = YES;
[self.cancelButton.trailingAnchor constraintEqualToAnchor:space2.leadingAnchor].active = YES;
[self.clearButton.leadingAnchor constraintEqualToAnchor:space2.trailingAnchor].active = YES;
```

A layout guide can also act as an opaque box that contains other views and controls, letting you encapsulate parts of your view and break up your layout into modular chunks.

**Swift**

```swift
let container = NSLayoutGuide()
view.addLayoutGuide(container)
 
// Layout the contents of the container
button.lastBaselineAnchor.constraintEqualToAnchor(textField.lastBaselineAnchor).active = true
button.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor).active = true
textField.leadingAnchor.constraintEqualToAnchor(button.trailingAnchor, constant: 8.0).active = true
textField.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor).active = true
textField.topAnchor.constraintEqualToAnchor(container.topAnchor).active = true
textField.bottomAnchor.constraintEqualToAnchor(container.bottomAnchor).active = true
 
// Set exterior constraints.
container.leadingAnchor.constraintEqualToAnchor(margins.leadingAnchor).active = true
container.trailingAnchor.constraintEqualToAnchor(margins.trailingAnchor).asctive = true
container.topAnchor.constraintEqualToAnchor(margins.topAnchor).active = true
```

**Objective-C**

```objc
NSLayoutGuide *container = [[NSLayoutGuide alloc] init];
[self.view addLayoutGuide:container];
 
// Layout the contents of the container
[self.button.lastBaselineAnchor constraintEqualToAnchor:self.textField.lastBaselineAnchor].active = YES;
[self.textField.leadingAnchor constraintEqualToAnchor:self.button.trailingAnchor constant:8.0].active = YES;
[self.textField.trailingAnchor constraintEqualToAnchor:container.trailingAnchor].active = YES;
[self.textField.topAnchor constraintEqualToAnchor:container.topAnchor].active = YES;
[self.textField.bottomAnchor constraintEqualToAnchor:container.bottomAnchor].active = YES;
 
// Set exterior constraints.
 
[container.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:20.0].active = YES;
[container.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:20.0].active = YES;
[container.topAnchor constraintEqualToAnchor:self.view.topAnchor constant:20.0].active = YES;
```

> **Note**

>  Layout constraints do not fully encapsulate their contents. The system still compares the priority of optional constraints inside the layout guide with the priority of optional constraints outside the guide.

## Topics

### Working With Layout Guides

- [identifier](nslayoutguide/identifier.md): A string used to identify the layout guide.
- [frame](nslayoutguide/frame.md): The layout guide’s frame in its owning view’s coordinate system.
- [owningView](nslayoutguide/owningview.md): The view that owns this layout guide.

### Creating Constraints Using Layout Anchors

- [bottomAnchor](nslayoutguide/bottomanchor.md): A layout anchor representing the bottom edge of the layout guide’s frame.
- [centerXAnchor](nslayoutguide/centerxanchor.md): A layout anchor representing the horizontal center of the layout guide’s frame.
- [centerYAnchor](nslayoutguide/centeryanchor.md): A layout anchor representing the vertical center of the layout guide’s frame.
- [heightAnchor](nslayoutguide/heightanchor.md): A layout anchor representing the height of the layout guide’s frame.
- [leadingAnchor](nslayoutguide/leadinganchor.md): A layout anchor representing the leading edge of the layout guide’s frame.
- [leftAnchor](nslayoutguide/leftanchor.md): A layout anchor representing the left edge of the layout guide’s frame.
- [rightAnchor](nslayoutguide/rightanchor.md): A layout anchor representing the right edge of the layout guide’s frame.
- [topAnchor](nslayoutguide/topanchor.md): A layout anchor representing the top edge of the layout guide’s frame.
- [trailingAnchor](nslayoutguide/trailinganchor.md): A layout anchor representing the trailing edge of the layout guide’s frame.
- [widthAnchor](nslayoutguide/widthanchor.md): A layout anchor representing the width of the layout guide’s frame.

### Instance Properties

- [hasAmbiguousLayout](nslayoutguide/hasambiguouslayout.md)

### Instance Methods

- [constraintsAffectingLayout(for:)](nslayoutguide/constraintsaffectinglayout%28for_%29.md)

### Initializers

- [init(coder:)](nslayoutguide/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### Layout Guides

- [NSLayoutDimension](nslayoutdimension.md): A factory class for creating size-based layout constraint objects using a fluent API.

# NSLayoutGuide (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

A rectangular area that can interact with Auto Layout.

## Declaration

```objectivec
@interface NSLayoutGuide : NSObject
```

<a id="overview"></a>

## Overview

Use layout guides to replace the placeholder views you may have created to represent inter-view spaces or encapsulation in your user interface. Traditionally, there were a number of Auto Layout techniques that required placeholder views. A placeholder view is an empty view that does not have any visual elements of its own and serves only to define a rectangular region in the view hierarchy. For example, if you wanted to use constraints to define the size or location of an empty space between views, you needed to use a placeholder view to represent that space. If you wanted to center a group of objects, you needed a placeholder view to contain those objects. Similarly, placeholder views could be used to contain and encapsulate part of your user interface. Placeholder views let you break up a large, complex user interface into self-contained, modular chunks. When used properly, they could greatly simplify your Auto Layout constraint logic.

There are a number of costs associated with adding placeholder views to your view hierarchy. First, there is the cost of creating and maintaining the view itself. Second, the placeholder view is a full member of the view hierarchy, which means that it adds overhead to every task the hierarchy performs. Worst of all, the invisible placeholder view can intercept messages that are intended for other views, causing problems that are very difficult to find.

The [NSLayoutGuide](nslayoutguide.md) class is designed to perform all the tasks previously performed by placeholder views, but to do it in a safer, more efficient manner. Layout guides are not views. They do not use as much memory, and they do not participate in the view hierarchy. Instead, they simply define a rectangular region in their owning view’s coordinate system that can interact with Auto Layout.

<a id="Creating-Layout-Guides"></a>

### Creating Layout Guides

To create a layout guide, perform the following steps:

1. Instantiate a new layout guide.
2. Add the layout guide to a view by calling the view’s [addLayoutGuide:](nsview/addlayoutguide%28__%29.md) method .
3. Define the position and size of the layout guide using Auto Layout.

You can use these guides to define the space between elements in your layout. The following example shows how to use layout guides to define an equal spacing between a series of views.

**Swift**

```swift
let space1 = NSLayoutGuide()
view.addLayoutGuide(space1)
 
let space2 = NSLayoutGuide()
view.addLayoutGuide(space2)
 
space1.widthAnchor.constraintEqualToAnchor(space2.widthAnchor).active = true
saveButton.trailingAnchor.constraintEqualToAnchor(space1.leadingAnchor).active = true
cancelButton.leadingAnchor.constraintEqualToAnchor(space1.trailingAnchor).active = true
cancelButton.trailingAnchor.constraintEqualToAnchor(space2.leadingAnchor).active = true
clearButton.leadingAnchor.constraintEqualToAnchor(space2.trailingAnchor).active = true
```

**Objective-C**

```objc
NSLayoutGuide *space1 = [[NSLayoutGuide alloc]init];
[self.view addLayoutGuide:space1];
 
NSLayoutGuide *space2 = [[NSLayoutGuide alloc] init];
[self.view addLayoutGuide:space2];
 
[space1.widthAnchor constraintEqualToAnchor:space2.widthAnchor].active = YES;
[self.saveButton.trailingAnchor constraintEqualToAnchor:space1.leadingAnchor].active = YES;
[self.cancelButton.leadingAnchor constraintEqualToAnchor:space1.trailingAnchor].active = YES;
[self.cancelButton.trailingAnchor constraintEqualToAnchor:space2.leadingAnchor].active = YES;
[self.clearButton.leadingAnchor constraintEqualToAnchor:space2.trailingAnchor].active = YES;
```

A layout guide can also act as an opaque box that contains other views and controls, letting you encapsulate parts of your view and break up your layout into modular chunks.

**Swift**

```swift
let container = NSLayoutGuide()
view.addLayoutGuide(container)
 
// Layout the contents of the container
button.lastBaselineAnchor.constraintEqualToAnchor(textField.lastBaselineAnchor).active = true
button.leadingAnchor.constraintEqualToAnchor(container.leadingAnchor).active = true
textField.leadingAnchor.constraintEqualToAnchor(button.trailingAnchor, constant: 8.0).active = true
textField.trailingAnchor.constraintEqualToAnchor(container.trailingAnchor).active = true
textField.topAnchor.constraintEqualToAnchor(container.topAnchor).active = true
textField.bottomAnchor.constraintEqualToAnchor(container.bottomAnchor).active = true
 
// Set exterior constraints.
container.leadingAnchor.constraintEqualToAnchor(margins.leadingAnchor).active = true
container.trailingAnchor.constraintEqualToAnchor(margins.trailingAnchor).asctive = true
container.topAnchor.constraintEqualToAnchor(margins.topAnchor).active = true
```

**Objective-C**

```objc
NSLayoutGuide *container = [[NSLayoutGuide alloc] init];
[self.view addLayoutGuide:container];
 
// Layout the contents of the container
[self.button.lastBaselineAnchor constraintEqualToAnchor:self.textField.lastBaselineAnchor].active = YES;
[self.textField.leadingAnchor constraintEqualToAnchor:self.button.trailingAnchor constant:8.0].active = YES;
[self.textField.trailingAnchor constraintEqualToAnchor:container.trailingAnchor].active = YES;
[self.textField.topAnchor constraintEqualToAnchor:container.topAnchor].active = YES;
[self.textField.bottomAnchor constraintEqualToAnchor:container.bottomAnchor].active = YES;
 
// Set exterior constraints.
 
[container.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:20.0].active = YES;
[container.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:20.0].active = YES;
[container.topAnchor constraintEqualToAnchor:self.view.topAnchor constant:20.0].active = YES;
```

> **Note**

>  Layout constraints do not fully encapsulate their contents. The system still compares the priority of optional constraints inside the layout guide with the priority of optional constraints outside the guide.

## Topics

### Working With Layout Guides

- [identifier](nslayoutguide/identifier.md): A string used to identify the layout guide.
- [frame](nslayoutguide/frame.md): The layout guide’s frame in its owning view’s coordinate system.
- [owningView](nslayoutguide/owningview.md): The view that owns this layout guide.

### Creating Constraints Using Layout Anchors

- [bottomAnchor](nslayoutguide/bottomanchor.md): A layout anchor representing the bottom edge of the layout guide’s frame.
- [centerXAnchor](nslayoutguide/centerxanchor.md): A layout anchor representing the horizontal center of the layout guide’s frame.
- [centerYAnchor](nslayoutguide/centeryanchor.md): A layout anchor representing the vertical center of the layout guide’s frame.
- [heightAnchor](nslayoutguide/heightanchor.md): A layout anchor representing the height of the layout guide’s frame.
- [leadingAnchor](nslayoutguide/leadinganchor.md): A layout anchor representing the leading edge of the layout guide’s frame.
- [leftAnchor](nslayoutguide/leftanchor.md): A layout anchor representing the left edge of the layout guide’s frame.
- [rightAnchor](nslayoutguide/rightanchor.md): A layout anchor representing the right edge of the layout guide’s frame.
- [topAnchor](nslayoutguide/topanchor.md): A layout anchor representing the top edge of the layout guide’s frame.
- [trailingAnchor](nslayoutguide/trailinganchor.md): A layout anchor representing the trailing edge of the layout guide’s frame.
- [widthAnchor](nslayoutguide/widthanchor.md): A layout anchor representing the width of the layout guide’s frame.

### Instance Properties

- [hasAmbiguousLayout](nslayoutguide/hasambiguouslayout.md)

### Instance Methods

- [constraintsAffectingLayoutForOrientation:](nslayoutguide/constraintsaffectinglayout%28for_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### Layout Guides

- [NSLayoutDimension](nslayoutdimension.md): A factory class for creating size-based layout constraint objects using a fluent API.
- [NSViewLayoutRegion](nsviewlayoutregion.md)
- [NSViewLayoutRegionAdaptivityAxis](nsviewlayoutregionadaptivityaxis.md)
