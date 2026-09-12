> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/init(machservicename:)](https://developer.apple.com/documentation/foundation/nsxpclistener/init(machservicename:))

# init(machServiceName:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes a listener in a LaunchAgent or LaunchDaemon which has a name advertised in a `launchd.plist` file.

## Declaration

```swift
init(machServiceName name: String)
```

<a id="Discussion"></a>

## Discussion

For example, you might use this in an agent launched by launchd with a `launchd.plist` contained in `~/Library/LaunchAgents`, or a daemon launched by launchd with a `launchd.plist` contained in `/Library/LaunchDaemons`.

# initWithMachServiceName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes a listener in a LaunchAgent or LaunchDaemon which has a name advertised in a `launchd.plist` file.

## Declaration

```objectivec
- (instancetype) initWithMachServiceName:(NSString *) name;
```

<a id="Discussion"></a>

## Discussion

For example, you might use this in an agent launched by launchd with a `launchd.plist` contained in `~/Library/LaunchAgents`, or a daemon launched by launchd with a `launchd.plist` contained in `/Library/LaunchDaemons`.
