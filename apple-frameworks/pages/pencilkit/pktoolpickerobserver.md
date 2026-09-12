> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickerobserver](https://developer.apple.com/documentation/pencilkit/pktoolpickerobserver)

# PKToolPickerObserver (Swift)

**Framework:** PencilKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.

## Declaration

```swift
@MainActor protocol PKToolPickerObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the methods of [PKToolPickerObserver](pktoolpickerobserver.md) to detect when the user changes the configuration of a [PKToolPicker](pktoolpicker.md) view. Each time the user changes the selected tool or other drawing characteristics, the tool picker notifies any registered observers. You use these notifications to update the configuration of the underlying canvas.

To register an observer with a tool picker, call the [addObserver(\_:)](pktoolpicker/addobserver%28__%29.md) method of the [PKToolPicker](pktoolpicker.md) object.

## Topics

### Detecting tool configuration changes

- [toolPickerSelectedToolItemDidChange(\_:)](pktoolpickerobserver/toolpickerselectedtoolitemdidchange%28__%29.md): Tells the observer when a person selects a new tool item.
- [toolPickerIsRulerActiveDidChange(\_:)](pktoolpickerobserver/toolpickerisruleractivedidchange%28__%29.md): Tells the observer when a person shows or hides the ruler.

### Monitoring visibility changes

- [toolPickerVisibilityDidChange(\_:)](pktoolpickerobserver/toolpickervisibilitydidchange%28__%29.md): Tells the observer when a person shows or hides the tool picker.
- [toolPickerFramesObscuredDidChange(\_:)](pktoolpickerobserver/toolpickerframesobscureddidchange%28__%29.md): Tells the observer when the area that the tool picker obscures changes.

### Deprecated

- [toolPickerSelectedToolDidChange(\_:)](pktoolpickerobserver/toolpickerselectedtooldidchange%28__%29.md): Deprecated. Tells the observer when a person selects a new tool.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [PKCanvasView](pkcanvasview.md)

## See Also

### Detecting changes to the picker

- [addObserver(\_:)](pktoolpicker/addobserver%28__%29.md): Adds the specified object to the list of objects to notify when the picker configuration changes.
- [removeObserver(\_:)](pktoolpicker/removeobserver%28__%29.md): Removes the specified object from the list of objects to notify when the picker configuration changes.

# PKToolPickerObserver (Objective-C)

**Framework:** PencilKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interface you use to detect when the user changes the selected tools and drawing characteristics of a tool picker object.

## Declaration

```objectivec
@protocol PKToolPickerObserver <NSObject>
```

<a id="overview"></a>

## Overview

Implement the methods of [PKToolPickerObserver](pktoolpickerobserver.md) to detect when the user changes the configuration of a [PKToolPicker](pktoolpicker.md) view. Each time the user changes the selected tool or other drawing characteristics, the tool picker notifies any registered observers. You use these notifications to update the configuration of the underlying canvas.

To register an observer with a tool picker, call the [addObserver:](pktoolpicker/addobserver%28__%29.md) method of the [PKToolPicker](pktoolpicker.md) object.

## Topics

### Detecting tool configuration changes

- [toolPickerSelectedToolItemDidChange:](pktoolpickerobserver/toolpickerselectedtoolitemdidchange%28__%29.md): Tells the observer when a person selects a new tool item.
- [toolPickerIsRulerActiveDidChange:](pktoolpickerobserver/toolpickerisruleractivedidchange%28__%29.md): Tells the observer when a person shows or hides the ruler.

### Monitoring visibility changes

- [toolPickerVisibilityDidChange:](pktoolpickerobserver/toolpickervisibilitydidchange%28__%29.md): Tells the observer when a person shows or hides the tool picker.
- [toolPickerFramesObscuredDidChange:](pktoolpickerobserver/toolpickerframesobscureddidchange%28__%29.md): Tells the observer when the area that the tool picker obscures changes.

### Deprecated

- [toolPickerSelectedToolDidChange:](pktoolpickerobserver/toolpickerselectedtooldidchange%28__%29.md): Deprecated. Tells the observer when a person selects a new tool.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [PKCanvasView](pkcanvasview.md)

## See Also

### Detecting changes to the picker

- [addObserver:](pktoolpicker/addobserver%28__%29.md): Adds the specified object to the list of objects to notify when the picker configuration changes.
- [removeObserver:](pktoolpicker/removeobserver%28__%29.md): Removes the specified object from the list of objects to notify when the picker configuration changes.
