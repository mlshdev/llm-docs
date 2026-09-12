> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/loadfromasset:changes:progress:completionhandler:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/loadfromasset:changes:progress:completionhandler:)

# loadFromAsset:changes:progress:completionHandler:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

## Declaration

```objectivec
+ (void) loadFromAsset:(AVAsset *) asset changes:(CNScriptChanges *) changes progress:(NSProgress *) progress completionHandler:(void (^)(CNScript *script, NSError *error)) completionHandler;
```

## Parameters

- `asset`: The loaded Cinematic asset.
- `changes`: You can obtain the optional changes from a previous editing session since the asset’s recording. If nil, the system records the asset in its original form.
- `progress`: The optional progress object to track progress or cancel loading. Represents just the loading of this asset. Create with desired total unit count or use zero to have the unit count filled in automatically. If nil, the system reports no progress.
- `completionHandler`: Called when the loaded Cinematic script completes, or with an error if it fails. An error returns, if the completion progress cancels before it completes.
