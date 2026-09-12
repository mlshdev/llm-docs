> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/init(target:selector:)](https://developer.apple.com/documentation/quartzcore/cadisplaylink/init(target:selector:))

# init(target:selector:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a display link for a target that calls its selector.

## Declaration

```swift
init(target: Any, selector sel: Selector)
```

## Parameters

- `target`: An object in your app that you want the system to notify each time it updates a display.
- `sel`: A selector instance that represents a method for `target`.

<a id="return-value"></a>

## Return Value

A new [CADisplayLink](../cadisplaylink.md) object.

<a id="Discussion"></a>

## Discussion

The selector on the target must be a method with the following signature, where sender is the display link returned by this method.

**Swift**

```swift
@objc func selector(sender: CADisplayLink)
```

**Objective-C**

```objc
- (void) selector:(CADisplayLink *)sender;
```

The newly constructed display link retains the target.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a display link for a target that calls its selector.

## Declaration

```objectivec
+ (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) sel;
```

## Parameters

- `target`: An object in your app that you want the system to notify each time it updates a display.
- `sel`: A selector instance that represents a method for `target`.

<a id="return-value"></a>

## Return Value

A new [CADisplayLink](../cadisplaylink.md) object.

<a id="Discussion"></a>

## Discussion

The selector on the target must be a method with the following signature, where sender is the display link returned by this method.

**Swift**

```swift
@objc func selector(sender: CADisplayLink)
```

**Objective-C**

```objc
- (void) selector:(CADisplayLink *)sender;
```

The newly constructed display link retains the target.
