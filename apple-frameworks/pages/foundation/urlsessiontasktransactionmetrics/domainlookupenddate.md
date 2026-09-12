> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/domainlookupenddate](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/domainlookupenddate)

# domainLookupEndDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time after the name lookup was completed.

## Declaration

```swift
var domainLookupEndDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This value will be `nil` if a persistent connection was used, or if the resource was retrieved from local resources.

## See Also

### Accessing temporal metrics

- [fetchStartDate](fetchstartdate.md): The time when the task started fetching the resource, from the server or locally.
- [domainLookupStartDate](domainlookupstartdate.md): The time immediately before the task started the name lookup for the resource.
- [connectStartDate](connectstartdate.md): The time immediately before the task started establishing a TCP connection to the server.
- [secureConnectionStartDate](secureconnectionstartdate.md): The time immediately before the task started the TLS security handshake to secure the current connection.
- [secureConnectionEndDate](secureconnectionenddate.md): The time immediately after the security handshake completed.
- [connectEndDate](connectenddate.md): The time immediately after the task finished establishing the connection to the server.
- [requestStartDate](requeststartdate.md): The time immediately before the task started requesting the resource, regardless of whether it is retrieved from the server or local resources.
- [requestEndDate](requestenddate.md): The time immediately after the task finished requesting the resource, regardless of whether it was retrieved from the server or local resources.
- [responseStartDate](responsestartdate.md): The time immediately after the task received the first byte of the response from the server or from local resources.
- [responseEndDate](responseenddate.md): The time immediately after the task received the last byte of the resource.

# domainLookupEndDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time after the name lookup was completed.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * domainLookupEndDate;
```

<a id="Discussion"></a>

## Discussion

This value will be `nil` if a persistent connection was used, or if the resource was retrieved from local resources.

## See Also

### Accessing temporal metrics

- [fetchStartDate](fetchstartdate.md): The time when the task started fetching the resource, from the server or locally.
- [domainLookupStartDate](domainlookupstartdate.md): The time immediately before the task started the name lookup for the resource.
- [connectStartDate](connectstartdate.md): The time immediately before the task started establishing a TCP connection to the server.
- [secureConnectionStartDate](secureconnectionstartdate.md): The time immediately before the task started the TLS security handshake to secure the current connection.
- [secureConnectionEndDate](secureconnectionenddate.md): The time immediately after the security handshake completed.
- [connectEndDate](connectenddate.md): The time immediately after the task finished establishing the connection to the server.
- [requestStartDate](requeststartdate.md): The time immediately before the task started requesting the resource, regardless of whether it is retrieved from the server or local resources.
- [requestEndDate](requestenddate.md): The time immediately after the task finished requesting the resource, regardless of whether it was retrieved from the server or local resources.
- [responseStartDate](responsestartdate.md): The time immediately after the task received the first byte of the response from the server or from local resources.
- [responseEndDate](responseenddate.md): The time immediately after the task received the last byte of the resource.
