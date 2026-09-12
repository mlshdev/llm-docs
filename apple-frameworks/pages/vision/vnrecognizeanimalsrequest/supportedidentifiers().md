> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizeanimalsrequest/supportedidentifiers()](https://developer.apple.com/documentation/vision/vnrecognizeanimalsrequest/supportedidentifiers())

# supportedIdentifiers() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the identifiers of the animals that the request detects.

## Declaration

```swift
func supportedIdentifiers() throws -> [VNAnimalIdentifier]
```

<a id="return-value"></a>

## Return Value

The animal identifiers.

## See Also

### Identifying Animals

- [VNAnimalIdentifier](../vnanimalidentifier.md): An animal identifier string.
- [knownAnimalIdentifiers(forRevision:)](knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

# supportedIdentifiersAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the identifiers of the animals that the request detects.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedIdentifiersAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The animal identifiers. On failure, this method returns `nil`.

## See Also

### Identifying Animals

- [VNAnimalIdentifier](../vnanimalidentifier.md): An animal identifier string.
- [knownAnimalIdentifiersForRevision:error:](knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.
