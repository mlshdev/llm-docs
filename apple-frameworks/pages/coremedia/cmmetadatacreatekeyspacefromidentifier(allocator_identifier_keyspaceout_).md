> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmetadatacreatekeyspacefromidentifier(allocator:identifier:keyspaceout:)](https://developer.apple.com/documentation/coremedia/cmmetadatacreatekeyspacefromidentifier(allocator:identifier:keyspaceout:))

# CMMetadataCreateKeySpaceFromIdentifier(allocator:identifier:keySpaceOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the keyspace by using an identifier.

## Declaration

```swift
func CMMetadataCreateKeySpaceFromIdentifier(allocator: CFAllocator?, identifier: CFString, keySpaceOut: UnsafeMutablePointer<CFString?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for creating the identifier.
- `identifier`: The identifier to be inspected.
- `keySpaceOut`: Upon return, a pointer to the keyspace that was used to create the identifier.

<a id="return-value"></a>

## Return Value

If successful, a nonzero result code. See [Metadata Identifier Error Codes](metadata-identifier-errors.md).

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace(allocator:key:keySpace:identifierOut:)](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeyFromIdentifierAsCFData(allocator:identifier:keyOut:)](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.

# CMMetadataCreateKeySpaceFromIdentifier (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of the keyspace by using an identifier.

## Declaration

```objectivec
extern OSStatus CMMetadataCreateKeySpaceFromIdentifier(CFAllocatorRef allocator, CFStringRef identifier, CFStringRef*keySpaceOut);
```

## Parameters

- `allocator`: The allocator to use for creating the identifier.
- `identifier`: The identifier to be inspected.
- `keySpaceOut`: Upon return, a pointer to the keyspace that was used to create the identifier.

<a id="return-value"></a>

## Return Value

If successful, a nonzero result code. See [Metadata Identifier Error Codes](metadata-identifier-errors.md).

## See Also

### Creating Metadata Identifiers

- [CMMetadataCreateIdentifierForKeyAndKeySpace](cmmetadatacreateidentifierforkeyandkeyspace%28allocator_key_keyspace_identifierout_%29.md): Creates a URL-like string identifier that represents a key or keyspace tuple.
- [CMMetadataCreateKeyFromIdentifier](cmmetadatacreatekeyfromidentifier%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier.
- [CMMetadataCreateKeyFromIdentifierAsCFData](cmmetadatacreatekeyfromidentifierascfdata%28allocator_identifier_keyout_%29.md): Creates a copy of the key by using an identifier, and results in a core foundation data object.
