> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/controller](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/controller)

# controller (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The underlying controller object that you use to access input elements.

## Declaration

```swift
var controller: GCController? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to either get the element’s input values directly, or set handlers to get callbacks with the input values that changed. If you don’t connect the virtual controller to the device using `connect()`, this property is `nil`.

# controller (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The underlying controller object that you use to access input elements.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GCController * controller;
```

<a id="Discussion"></a>

## Discussion

Use this property to either get the element’s input values directly, or set handlers to get callbacks with the input values that changed. If you don’t connect the virtual controller to the device using `connect()`, this property is `nil`.
