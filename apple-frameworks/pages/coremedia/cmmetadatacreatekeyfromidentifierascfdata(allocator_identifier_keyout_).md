> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatacreatekeyfromidentifierascfdata(allocator:identifier:keyout:)](https://developer.apple.com/documentation/coremedia/cmmetadatacreatekeyfromidentifierascfdata(allocator:identifier:keyout:))

# CMMetadataCreateKeyFromIdentifierAsCFData(allocator:identifier:keyOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the key by using an identifier, and results in a core foundation data object.

## Declaration

```swift
func CMMetadataCreateKeyFromIdentifierAsCFData(allocator: CFAllocator?, identifier: CFString, keyOut: UnsafeMutablePointer<CFData?>) -> OSStatus
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

The bytes in the `CFData` correspond to how they are serialized in the file.

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace(allocator:key:keySpace:identifierOut:)](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeySpaceFromIdentifier(allocator:identifier:keySpaceOut:)](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.

# CMMetadataCreateKeyFromIdentifierAsCFData (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the key by using an identifier, and results in a core foundation data object.

## Declaration

```objectivec
extern OSStatus CMMetadataCreateKeyFromIdentifierAsCFData(CFAllocatorRef allocator, CFStringRef identifier, CFDataRef*keyOut);
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

The bytes in the `CFData` correspond to how they are serialized in the file.

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeySpaceFromIdentifier](cmmetadatacreatekeyspacefromidentifier%28allocator_identifier_keyspaceout_%29.md): Creates a copy of the keyspace by using an identifier.
