> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspothelpercommand/createresponse(_:)

# createResponse(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a response to the command.

## Declaration

```swift
func createResponse(_ result: NEHotspotHelperResult) -> NEHotspotHelperResponse
```

## Parameters

- `result`: The result of handling the command.

<a id="return-value"></a>

## Return Value

A NEHotspostHelperResponse object.

## See Also

### Response creation

- [NEHotspotHelperResult](../nehotspothelperresult.md): The result of handling a hotspot command.

# createResponse: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Create a response to the command.

## Declaration

```objectivec
- (NEHotspotHelperResponse *) createResponse:(NEHotspotHelperResult) result;
```

## Parameters

- `result`: The result of handling the command.

<a id="return-value"></a>

## Return Value

A NEHotspostHelperResponse object.

## See Also

### Response creation

- [NEHotspotHelperResult](../nehotspothelperresult.md): The result of handling a hotspot command.
