> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/entry/modelurl](https://developer.apple.com/documentation/coreml/mlmodelcollection/entry/modelurl)

# modelURL (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

The compiled model’s location on the device’s file system.

> Use Background Assets or NSURLSession instead.

## Declaration

```swift
var modelURL: URL { get }
```

# modelURL (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

The compiled model’s location on the device’s file system.

> Use Background Assets or NSURLSession instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * modelURL;
```
