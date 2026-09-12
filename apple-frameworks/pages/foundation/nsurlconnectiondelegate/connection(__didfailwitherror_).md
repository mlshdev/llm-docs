> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate/connection(_:didfailwitherror:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate/connection(_:didfailwitherror:))

# connection(\_:didFailWithError:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when a connection fails to load its request successfully.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didFailWithError error: any Error)
```

## Parameters

- `connection`: The connection sending the message.
- `error`: An error object containing details of why the connection failed to load the request successfully.

<a id="Discussion"></a>

## Discussion

Once the delegate receives this message, it will receive no further messages for `connection`.

# connection:didFailWithError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent when a connection fails to load its request successfully.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didFailWithError:(NSError *) error;
```

## Parameters

- `connection`: The connection sending the message.
- `error`: An error object containing details of why the connection failed to load the request successfully.

<a id="Discussion"></a>

## Discussion

Once the delegate receives this message, it will receive no further messages for `connection`.
