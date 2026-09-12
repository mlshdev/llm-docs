> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/benetworkingprocess/networkprocesswithbundleid:interruptionhandler:completion:](https://developer.apple.com/documentation/browserenginekit/benetworkingprocess/networkprocesswithbundleid:interruptionhandler:completion:)

# networkProcessWithBundleID:interruptionHandler:completion:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS 14.3+

Launches a networking extension process asynchronously.

## Declaration

```objectivec
+ (void) networkProcessWithBundleID:(NSString *) bundleID interruptionHandler:(void (^)()) interruptionHandler completion:(void (^)(BENetworkingProcess *process, NSError *error)) completion;
```

## Parameters

- `bundleID`: The bundle identifier of the networking extension to launch, or `nil` to use the default bundle identifier for this app’s networking extension.
- `interruptionHandler`: A block the system calls if the networking extension process exits abnormally.
- `completion`: A block the system calls when the process finishes launching.

<a id="discussion"></a>

## Discussion

Your browser app can run one instance of each of its networking extensions. The first time you call this method, the system launches your networking extension. If you subsequently call this method with the same bundle identifier, or you call [networkProcessWithInterruptionHandler:completion:](networkprocesswithinterruptionhandler_completion_.md) after previously calling this method with `nil` as the bundle identifier, your completion handler gets a reference to the same process.

The system guarantees that the process launched when it calls your completion handler.

## See Also

### Creating and invalidating extension processes

- [networkProcessWithInterruptionHandler:completion:](networkprocesswithinterruptionhandler_completion_.md): Launches a networking extension process asynchronously.
- [invalidate](invalidate.md): Stops the networking process.
