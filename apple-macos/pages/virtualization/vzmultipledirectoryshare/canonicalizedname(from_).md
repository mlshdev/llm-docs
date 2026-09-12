> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmultipledirectoryshare/canonicalizedname(from:)](https://developer.apple.com/documentation/virtualization/vzmultipledirectoryshare/canonicalizedname(from:))

# canonicalizedName(from:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Transforms a string to be a valid directory name.

## Declaration

```swift
class func canonicalizedName(from name: String) -> String?
```

## Parameters

- `name`: The name to transform.

<a id="return-value"></a>

## Return Value

Returns a String with the canonicalized name, or `nil` if there was an error.

## See Also

### Directory name utility methods

- [validateName(\_:)](validatename%28__%29.md): Check if a name is a valid directory name.

# canonicalizedNameFromName: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Transforms a string to be a valid directory name.

## Declaration

```objectivec
+ (NSString *) canonicalizedNameFromName:(NSString *) name;
```

## Parameters

- `name`: The name to transform.

<a id="return-value"></a>

## Return Value

Returns a String with the canonicalized name, or `nil` if there was an error.

## See Also

### Directory name utility methods

- [validateName:error:](validatename%28__%29.md): Check if a name is a valid directory name.
