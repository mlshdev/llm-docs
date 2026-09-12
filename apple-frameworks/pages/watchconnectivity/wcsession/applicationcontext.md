> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/applicationcontext](https://developer.apple.com/documentation/watchconnectivity/wcsession/applicationcontext)

# applicationContext (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent contextual data sent to the paired and active device.

## Declaration

```swift
var applicationContext: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

After calling the [updateApplicationContext(\_:)](updateapplicationcontext%28__%29.md) method, the session object places a copy of your dictionary in this property so that you can determine what data you last sent to the counterpart.

## See Also

### Managing Background Updates

- [updateApplicationContext(\_:)](updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [receivedApplicationContext](receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.

# applicationContext (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent contextual data sent to the paired and active device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,id> * applicationContext;
```

<a id="Discussion"></a>

## Discussion

After calling the [updateApplicationContext:error:](updateapplicationcontext%28__%29.md) method, the session object places a copy of your dictionary in this property so that you can determine what data you last sent to the counterpart.

## See Also

### Managing Background Updates

- [updateApplicationContext:error:](updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [receivedApplicationContext](receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.
