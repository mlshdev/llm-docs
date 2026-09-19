> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsfetchindexdescription/init(name:elements:)

# init(name:elements:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a fetch index description using the specified name and element descriptions.

## Declaration

```swift
init(name: String, elements: [NSFetchIndexElementDescription]?)
```

## Parameters

- `name`: The name of the fetch index description.
- `elements`: An array of fetch index element descriptions.

# initWithName:elements: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a fetch index description using the specified name and element descriptions.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name elements:(NSArray<NSFetchIndexElementDescription *> *) elements;
```

## Parameters

- `name`: The name of the fetch index description.
- `elements`: An array of fetch index element descriptions.
