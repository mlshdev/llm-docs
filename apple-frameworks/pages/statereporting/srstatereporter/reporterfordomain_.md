> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/srstatereporter/reporterfordomain:](https://developer.apple.com/documentation/statereporting/srstatereporter/reporterfordomain:)

# reporterForDomain:

**Interface language:** Objective-C

**Framework:** StateReporting  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the reporter instance unique to the given domain name.

## Declaration

```objectivec
+ (instancetype) reporterForDomain:(NSString *) domain;
```

## Parameters

- `domain`: The reverse DNS-style name of the domain whose state you are reporting.

<a id="return-value"></a>

## Return Value

The reporter instance for the specified domain.

<a id="discussion"></a>

## Discussion

This method is the only way to obtain an `SRStateReporter`. Calling it multiple times with the same domain string always returns the same object.
