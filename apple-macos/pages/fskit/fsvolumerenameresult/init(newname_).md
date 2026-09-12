> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumerenameresult/init(newname:)](https://developer.apple.com/documentation/fskit/fsvolumerenameresult/init(newname:))

# init(newName:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for a volume-renaming operation.

## Declaration

```swift
init?(newName: FSFileName)
```

## Parameters

- `newName`: The new volume name.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a volume-rename result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.

# initWithNewName: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for a volume-renaming operation.

## Declaration

```objectivec
- (instancetype) initWithNewName:(FSFileName *) newName;
```

## Parameters

- `newName`: The new volume name.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a volume-rename result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
