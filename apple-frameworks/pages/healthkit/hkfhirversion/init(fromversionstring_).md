> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirversion/init(fromversionstring:)](https://developer.apple.com/documentation/healthkit/hkfhirversion/init(fromversionstring:))

# init(fromVersionString:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

Creates an FHIR version object from a string representation of the version.

## Declaration

```swift
convenience init(fromVersionString versionString: String) throws
```

## Parameters

- `versionString`: A string representing the version.

<a id="Discussion"></a>

## Discussion

The string must be in the following format: `<major>.<minor>.<patch>`.

## See Also

### Creating Version Objects

- [primaryDSTU2()](primarydstu2%28%29.md): Returns the primary Second Draft Standard for Trial Use (DSTU2) version.
- [primaryR4()](primaryr4%28%29.md): Returns the primary Release 4 (R4) version.

# versionFromVersionString:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

Creates an FHIR version object from a string representation of the version.

## Declaration

```objectivec
+ (instancetype) versionFromVersionString:(NSString *) versionString error:(NSError **) errorOut;
```

## Parameters

- `versionString`: A string representing the version.
- `errorOut`: A pointer to an error object. If an error occurs, the system sets this pointer to an error object that contains information about the problem. Specify `nil` for this parameter if you don’t want to receive error information.

<a id="Discussion"></a>

## Discussion

The string must be in the following format: `<major>.<minor>.<patch>`.

## See Also

### Creating Version Objects

- [primaryDSTU2Version](primarydstu2%28%29.md): Returns the primary Second Draft Standard for Trial Use (DSTU2) version.
- [primaryR4Version](primaryr4%28%29.md): Returns the primary Release 4 (R4) version.
