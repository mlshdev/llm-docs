> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webresource/init(data:url:mimetype:textencodingname:framename:)-914h4](https://developer.apple.com/documentation/webkit/webresource/init(data:url:mimetype:textencodingname:framename:)-914h4)

# init(data:url:mimeType:textEncodingName:frameName:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a web resource instance.

## Declaration

```swift
init!(data: Data!, url URL: URL!, mimeType MIMEType: String!, textEncodingName: String!, frameName: String!)
```

## Parameters

- `data`: The download data.
- `URL`: The download URL.
- `MIMEType`: The MIME type of the data.
- `textEncodingName`: The IANA encoding name (for example, “utf-8” or “utf-16”). This parameter may be `nil`.
- `frameName`: The name of the frame. Use this parameter if the resource represents the contents of an entire HTML frame; otherwise pass `nil`.

<a id="return-value"></a>

## Return Value

An initialized web resource.

# initWithData:URL:MIMEType:textEncodingName:frameName: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a web resource instance.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data URL:(NSURL *) URL MIMEType:(NSString *) MIMEType textEncodingName:(NSString *) textEncodingName frameName:(NSString *) frameName;
```

## Parameters

- `data`: The download data.
- `URL`: The download URL.
- `MIMEType`: The MIME type of the data.
- `textEncodingName`: The IANA encoding name (for example, “utf-8” or “utf-16”). This parameter may be `nil`.
- `frameName`: The name of the frame. Use this parameter if the resource represents the contents of an entire HTML frame; otherwise pass `nil`.

<a id="return-value"></a>

## Return Value

An initialized web resource.
