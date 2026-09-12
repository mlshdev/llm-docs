> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatacreatekeyfromidentifier(allocator:identifier:keyout:)](https://developer.apple.com/documentation/coremedia/cmmetadatacreatekeyfromidentifier(allocator:identifier:keyout:))

# CMMetadataCreateKeyFromIdentifier(allocator:identifier:keyOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the key by using an identifier.

## Declaration

```swift
func CMMetadataCreateKeyFromIdentifier(allocator: CFAllocator?, identifier: CFString, keyOut: UnsafeMutablePointer<CFTypeRef?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for creating the identifier.
- `identifier`: The identifier to be inspected.
- `keyOut`: Upon return, a pointer to the key data that was used to create the identifier.

<a id="return-value"></a>

## Return Value

If successful, a nonzero result code. See [Metadata Identifier Error Codes](metadata-identifier-errors.md).

<a id="Discussion"></a>

## Discussion

The returned `CFType` is based on the keyspace encoded in the identifier.

For `OSType` keyspaces, the key will be returned as a `CFNumber`, where a big endian interpretation of its [CFNumberType.sInt32Type](../corefoundation/cfnumbertype/sint32type.md) value represents the four bytes of the key’s numeric value.

For the keyspaces [kCMMetadataKeySpace_QuickTimeMetadata](kcmmetadatakeyspace_quicktimemetadata.md) and [kCMMetadataKeySpace_Icy](kcmmetadatakeyspace_icy.md), the key will be returned as a `CFString`.

All other keyspaces will have the function return the key as a `CFData`.

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace(allocator:key:keySpace:identifierOut:)](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifierAsCFData(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.
- [CMMetadataCreateKeySpaceFromIdentifier(allocator:identifier:keySpaceOut:)](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.

# CMMetadataCreateKeyFromIdentifier (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the key by using an identifier.

## Declaration

```objectivec
extern OSStatus CMMetadataCreateKeyFromIdentifier(CFAllocatorRef allocator, CFStringRef identifier, CFTypeRef*keyOut);
```

## Parameters

- `allocator`: The allocator to use for creating the identifier.
- `identifier`: The identifier to be inspected.
- `keyOut`: Upon return, a pointer to the key data that was used to create the identifier.

<a id="return-value"></a>

## Return Value

If successful, a nonzero result code. See [Metadata Identifier Error Codes](metadata-identifier-errors.md).

<a id="Discussion"></a>

## Discussion

The returned `CFType` is based on the keyspace encoded in the identifier.

For `OSType` keyspaces, the key will be returned as a `CFNumber`, where a big endian interpretation of its [kCFNumberSInt32Type](../corefoundation/cfnumbertype/sint32type.md) value represents the four bytes of the key’s numeric value.

For the keyspaces [kCMMetadataKeySpace_QuickTimeMetadata](kcmmetadatakeyspace_quicktimemetadata.md) and [kCMMetadataKeySpace_Icy](kcmmetadatakeyspace_icy.md), the key will be returned as a `CFString`.

All other keyspaces will have the function return the key as a `CFData`.

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifierAsCFData](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.
- [CMMetadataCreateKeySpaceFromIdentifier](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.
