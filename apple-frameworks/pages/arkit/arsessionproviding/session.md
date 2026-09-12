> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionproviding/session](https://developer.apple.com/documentation/arkit/arsessionproviding/session)

# session (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A contract to declare an AR session.

## Declaration

```swift
var session: ARSession { get }
```

<a id="Discussion"></a>

## Discussion

Some clients may use key-value observation (KVO) to be notified when this property changes values. To support KVO, Swift classes that adopt [ARSessionProviding](../arsessionproviding.md) should mark its [session](session.md) as `@objc` and `dynamic`.

# session (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS

A contract to declare an AR session.

## Declaration

```objectivec
@property (readonly) ARSession * session;
```

<a id="Discussion"></a>

## Discussion

Some clients may use key-value observation (KVO) to be notified when this property changes values. To support KVO, Swift classes that adopt [ARSessionProviding](../arsessionproviding.md) should mark its [session](session.md) as `@objc` and `dynamic`.
