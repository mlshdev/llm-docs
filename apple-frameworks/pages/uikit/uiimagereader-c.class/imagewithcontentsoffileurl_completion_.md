> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiimagereader-c.class/imagewithcontentsoffileurl:completion:

# imageWithContentsOfFileURL:completion:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Asynchronously generate an image from the given file URL. If an image could not be generated, the completion will be called with nil.

## Declaration

```objectivec
- (void) imageWithContentsOfFileURL:(NSURL *) url completion:(void (^)(UIImage *)) completion;
```
