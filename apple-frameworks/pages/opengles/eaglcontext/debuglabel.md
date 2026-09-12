> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/debuglabel](https://developer.apple.com/documentation/opengles/eaglcontext/debuglabel)

# debugLabel (Swift)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A label describing the context for use in debugging.

## Declaration

```swift
var debugLabel: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a meaningful name for a context. This label, which appears in the Xcode OpenGL ES Frame Debugger interface, makes it easy for you to more easily keep track of different contexts when debugging a multicontext app.

# debugLabel (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 12.0) · iPadOS 6.0+ (deprecated in 12.0) · Mac Catalyst 6.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A label describing the context for use in debugging.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * debugLabel;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a meaningful name for a context. This label, which appears in the Xcode OpenGL ES Frame Debugger interface, makes it easy for you to more easily keep track of different contexts when debugging a multicontext app.
