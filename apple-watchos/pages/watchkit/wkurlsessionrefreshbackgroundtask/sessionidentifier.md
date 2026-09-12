> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkurlsessionrefreshbackgroundtask/sessionidentifier](https://developer.apple.com/documentation/watchkit/wkurlsessionrefreshbackgroundtask/sessionidentifier)

# sessionIdentifier (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The identifier for the triggering background transfer.

## Declaration

```swift
var sessionIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property holds the background session identifier from the [URLSessionConfiguration](https://developer.apple.com/documentation/foundation/urlsessionconfiguration) object used to create the background transfer. Use this identifier to create a configuration and session object to connect to the background session task.

# sessionIdentifier (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The identifier for the triggering background transfer.

## Declaration

```objectivec
@property (copy, readonly) NSString * sessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property holds the background session identifier from the [NSURLSessionConfiguration](https://developer.apple.com/documentation/foundation/urlsessionconfiguration) object used to create the background transfer. Use this identifier to create a configuration and session object to connect to the background session task.
