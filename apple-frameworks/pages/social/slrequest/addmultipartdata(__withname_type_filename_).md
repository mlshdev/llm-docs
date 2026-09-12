> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/addmultipartdata(_:withname:type:filename:)](https://developer.apple.com/documentation/social/slrequest/addmultipartdata(_:withname:type:filename:))

# addMultipartData(\_:withName:type:filename:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Specifies a named multipart POST body for this request.

## Declaration

```swift
func addMultipartData(_ data: Data!, withName name: String!, type: String!, filename: String!)
```

## Parameters

- `data`: The data for the multipart POST body, such as an image or text.
- `name`: The name of the multipart POST body. This is the name that a specific social service expects.
- `type`: The type of the multipart POST body. This is the MIME content type of the multipart data.
- `filename`: The filename of the attachment that you want to POST. Many social services require a filename in order to accept certain POST requests, such as uploading an image or video. If your multipart data does not require a filename, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Possible parameter values are dependent on the target service. This information, as well as guidance on when to use a multipart POST body, is documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Adding Data to the Request

- [addMultipartData(\_:withName:type:)](addmultipartdata%28__withname_type_%29.md): Deprecated. Specifies a named multipart POST body for this request.

# addMultipartData:withName:type:filename: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Specifies a named multipart POST body for this request.

## Declaration

```objectivec
- (void) addMultipartData:(NSData *) data withName:(NSString *) name type:(NSString *) type filename:(NSString *) filename;
```

## Parameters

- `data`: The data for the multipart POST body, such as an image or text.
- `name`: The name of the multipart POST body. This is the name that a specific social service expects.
- `type`: The type of the multipart POST body. This is the MIME content type of the multipart data.
- `filename`: The filename of the attachment that you want to POST. Many social services require a filename in order to accept certain POST requests, such as uploading an image or video. If your multipart data does not require a filename, pass in `nil`.

<a id="Discussion"></a>

## Discussion

Possible parameter values are dependent on the target service. This information, as well as guidance on when to use a multipart POST body, is documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Adding Data to the Request

- [addMultipartData:withName:type:](addmultipartdata%28__withname_type_%29.md): Deprecated. Specifies a named multipart POST body for this request.
