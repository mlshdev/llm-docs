> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnrenderingsessionattributes/loadfromasset:completionhandler:

# loadFromAsset:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Loads the rendering session attributes from an asset asynchronously.

## Declaration

```objectivec
+ (void) loadFromAsset:(AVAsset *) asset completionHandler:(void (^)(CNRenderingSessionAttributes *sessionAttributes, NSError *error)) completionHandler;
```

## Parameters

- `asset`: The Cinematic asset to load.
- `completionHandler`: Calls with the loaded Cinematic script when done, or an error if it fails. If progress cancels before it completes, the completion handler is an error.
