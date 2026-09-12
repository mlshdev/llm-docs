> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmultipledirectoryshare/validatename(_:)](https://developer.apple.com/documentation/virtualization/vzmultipledirectoryshare/validatename(_:))

# validateName(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Check if a name is a valid directory name.

## Declaration

```swift
class func validateName(_ name: String) throws
```

## Parameters

- `name`: The name to validate.

<a id="Discussion"></a>

## Discussion

The name must not be empty, have characters unsafe for file systems, be longer than `NAME_MAX`, or using a reserved name such as the Unix “.” or “..” current and parent directory filenames.

## See Also

### Directory name utility methods

- [canonicalizedName(from:)](canonicalizedname%28from_%29.md): Transforms a string to be a valid directory name.

# validateName:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Check if a name is a valid directory name.

## Declaration

```objectivec
+ (BOOL) validateName:(NSString *) name error:(NSError **) error;
```

## Parameters

- `name`: The name to validate.
- `error`: Returns an error that describes why the name isn’t valid, or `nil` on success.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

The name must not be empty, have characters unsafe for file systems, be longer than `NAME_MAX`, or using a reserved name such as the Unix “.” or “..” current and parent directory filenames.

## See Also

### Directory name utility methods

- [canonicalizedNameFromName:](canonicalizedname%28from_%29.md): Transforms a string to be a valid directory name.
