> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrchannelclusterrecordprogramparams/timedinvoketimeoutms](https://developer.apple.com/documentation/matter/mtrchannelclusterrecordprogramparams/timedinvoketimeoutms)

# timedInvokeTimeoutMs (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Controls whether the command is a timed command (using Timed Invoke).

## Declaration

```swift
@NSCopying var timedInvokeTimeoutMs: NSNumber? { get set }
```

<a id="discussion"></a>

## Discussion

If nil (the default value), a regular invoke is done for commands that do not require a timed invoke and a timed invoke with some default timed request timeout is done for commands that require a timed invoke.

If not nil, a timed invoke is done, with the provided value used as the timed request timeout.  The value should be chosen small enough to provide the desired security properties but large enough that it will allow a round-trip from the server to the client (for the status response and actual invoke request) within the timeout window.

# timedInvokeTimeoutMs (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Controls whether the command is a timed command (using Timed Invoke).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSNumber * timedInvokeTimeoutMs;
```

<a id="discussion"></a>

## Discussion

If nil (the default value), a regular invoke is done for commands that do not require a timed invoke and a timed invoke with some default timed request timeout is done for commands that require a timed invoke.

If not nil, a timed invoke is done, with the provided value used as the timed request timeout.  The value should be chosen small enough to provide the desired security properties but large enough that it will allow a round-trip from the server to the client (for the status response and actual invoke request) within the timeout window.
