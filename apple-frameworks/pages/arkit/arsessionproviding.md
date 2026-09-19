> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arsessionproviding

# ARSessionProviding (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · visionOS 1.0+ (deprecated in 1.0)

An object that provides a session.

## Declaration

```swift
protocol ARSessionProviding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

As an example usage, [ARCoachingOverlayView](arcoachingoverlayview.md) exposes [sessionProvider](arcoachingoverlayview/sessionprovider.md) to access your app’s current session.

## Topics

### Providing a Session

- [session](arsessionproviding/session.md): A contract to declare an AR session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARSCNView](arscnview.md)
- [ARSKView](arskview.md)

# ARSessionProviding (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · visionOS 1.0+ (deprecated in 1.0)

An object that provides a session.

## Declaration

```objectivec
@protocol ARSessionProviding <NSObject>
```

<a id="overview"></a>

## Overview

As an example usage, [ARCoachingOverlayView](arcoachingoverlayview.md) exposes [sessionProvider](arcoachingoverlayview/sessionprovider.md) to access your app’s current session.

## Topics

### Providing a Session

- [session](arsessionproviding/session.md): A contract to declare an AR session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARSCNView](arscnview.md)
- [ARSKView](arskview.md)
