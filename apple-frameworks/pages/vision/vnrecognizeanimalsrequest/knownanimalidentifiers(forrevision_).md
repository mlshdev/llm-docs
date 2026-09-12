> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizeanimalsrequest/knownanimalidentifiers(forrevision:)](https://developer.apple.com/documentation/vision/vnrecognizeanimalsrequest/knownanimalidentifiers(forrevision:))

# knownAnimalIdentifiers(forRevision:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

> Use [supportedIdentifiers()](supportedidentifiers%28%29.md) instead.

## Declaration

```swift
class func knownAnimalIdentifiers(forRevision requestRevision: Int) throws -> [VNAnimalIdentifier]
```

## Parameters

- `requestRevision`: The revision of the animal recognition request.

<a id="return-value"></a>

## Return Value

The animal identifiers.

## See Also

### Identifying Animals

- [supportedIdentifiers()](supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [VNAnimalIdentifier](../vnanimalidentifier.md): An animal identifier string.

# knownAnimalIdentifiersForRevision:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

> Use [supportedIdentifiersAndReturnError:](supportedidentifiers%28%29.md) instead.

## Declaration

```objectivec
+ (NSArray<NSString *> *) knownAnimalIdentifiersForRevision:(NSUInteger) requestRevision error:(NSError **) error;
```

## Parameters

- `requestRevision`: The revision of the animal recognition request.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The animal identifiers. On failure, this method returns `nil`.

## See Also

### Identifying Animals

- [supportedIdentifiersAndReturnError:](supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [VNAnimalIdentifier](../vnanimalidentifier.md): An animal identifier string.
