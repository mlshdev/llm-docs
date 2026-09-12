> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereader-c.class/imagewithdata:completion:](https://developer.apple.com/documentation/uikit/uiimagereader-c.class/imagewithdata:completion:)

# imageWithData:completion:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Asynchronously generate an image from the given data. If an image could not be generated, the completion will be called with nil.

## Declaration

```objectivec
- (void) imageWithData:(NSData *) data completion:(void (^)(UIImage *)) completion;
```
