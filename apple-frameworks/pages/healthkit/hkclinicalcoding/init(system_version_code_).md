> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalcoding/init(system:version:code:)](https://developer.apple.com/documentation/healthkit/hkclinicalcoding/init(system:version:code:))

# init(system:version:code:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a clinical coding with the specified system, version, and code.

## Declaration

```swift
init(system: String, version: String?, code: String)
```

## Parameters

- `system`: The string that identifies the coding system, typically a HL7 URL.
- `version`: The version of the system, if applicable.
- `code`: The clinical code string that represents the medical concept.

<a id="discussion"></a>

## Discussion

Use when you need to explicitly construct a coding object to associate a HealthKit concept with a standardized medical code.

# initWithSystem:version:code: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a clinical coding with the specified system, version, and code.

## Declaration

```objectivec
- (instancetype) initWithSystem:(NSString *) system version:(NSString *) version code:(NSString *) code;
```

## Parameters

- `system`: The string that identifies the coding system, typically a HL7 URL.
- `version`: The version of the system, if applicable.
- `code`: The clinical code string that represents the medical concept.

<a id="discussion"></a>

## Discussion

Use when you need to explicitly construct a coding object to associate a HealthKit concept with a standardized medical code.
