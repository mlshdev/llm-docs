> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/addmultipartdata(_:withname:type:)](https://developer.apple.com/documentation/social/slrequest/addmultipartdata(_:withname:type:))

# addMultipartData(\_:withName:type:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Specifies a named multipart POST body for this request.

## Declaration

```swift
func addMultipartData(_ data: Data!, withName name: String!, type: String!)
```

## Parameters

- `data`: The data for the multipart POST body, such as an image or text.
- `name`: The name of the multipart POST body. This is the name that a specific social service expects.
- `type`: The type of the multipart POST body. This is the MIME content type of the multipart data.

<a id="Discussion"></a>

## Discussion

Possible parameter values are dependent on the target service. This information, as well as guidance on when to use a multipart POST body, is documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Adding Data to the Request

- [addMultipartData(\_:withName:type:filename:)](addmultipartdata%28__withname_type_filename_%29.md): Specifies a named multipart POST body for this request.

# addMultipartData:withName:type: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Specifies a named multipart POST body for this request.

## Declaration

```objectivec
- (void) addMultipartData:(NSData *) data withName:(NSString *) name type:(NSString *) type;
```

## Parameters

- `data`: The data for the multipart POST body, such as an image or text.
- `name`: The name of the multipart POST body. This is the name that a specific social service expects.
- `type`: The type of the multipart POST body. This is the MIME content type of the multipart data.

<a id="Discussion"></a>

## Discussion

Possible parameter values are dependent on the target service. This information, as well as guidance on when to use a multipart POST body, is documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Adding Data to the Request

- [addMultipartData:withName:type:filename:](addmultipartdata%28__withname_type_filename_%29.md): Specifies a named multipart POST body for this request.
