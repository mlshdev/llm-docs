> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderreading/object(withitemproviderdata:typeidentifier:)](https://developer.apple.com/documentation/foundation/nsitemproviderreading/object(withitemproviderdata:typeidentifier:))

# object(withItemProviderData:typeIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new instance of a class using the given data and UTI string.

## Declaration

```swift
static func object(withItemProviderData data: Data, typeIdentifier: String) throws -> Self
```

## Parameters

- `data`: The data used to create the object.
- `typeIdentifier`: The uniform type identifier (UTI) representing the data type of `data`.

<a id="return-value"></a>

## Return Value

An object created from the given data.

# objectWithItemProviderData:typeIdentifier:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new instance of a class using the given data and UTI string.

## Declaration

```objectivec
+ (instancetype) objectWithItemProviderData:(NSData *) data typeIdentifier:(NSString *) typeIdentifier error:(NSError **) outError;
```

## Parameters

- `data`: The data used to create the object.
- `typeIdentifier`: The uniform type identifier (UTI) representing the data type of `data`.

<a id="return-value"></a>

## Return Value

An object created from the given data.
