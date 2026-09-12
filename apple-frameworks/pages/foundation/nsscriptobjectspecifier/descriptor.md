> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/descriptor](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/descriptor)

# descriptor (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an Apple event descriptor that represents the receiver.

## Declaration

```swift
@NSCopying var descriptor: NSAppleEventDescriptor? { get }
```

<a id="return-value"></a>

## Return Value

An Apple event descriptor of type `typeObjectSpecifier`.

<a id="Discussion"></a>

## Discussion

If the receiver was created with [init(descriptor:)](init%28descriptor_%29.md), the passed-in descriptor is returned. Otherwise, a new descriptor is created and returned, autoreleased.

# descriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an Apple event descriptor that represents the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSAppleEventDescriptor * descriptor;
```

<a id="return-value"></a>

## Return Value

An Apple event descriptor of type `typeObjectSpecifier`.

<a id="Discussion"></a>

## Discussion

If the receiver was created with [objectSpecifierWithDescriptor:](init%28descriptor_%29.md), the passed-in descriptor is returned. Otherwise, a new descriptor is created and returned, autoreleased.
