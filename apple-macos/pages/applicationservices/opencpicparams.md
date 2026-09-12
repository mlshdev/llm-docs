> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/opencpicparams](https://developer.apple.com/documentation/applicationservices/opencpicparams)

# OpenCPicParams (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

## Declaration

```swift
struct OpenCPicParams
```

## Topics

### Initializers

- [init()](opencpicparams/1463952-init.md)
- [init(srcRect:hRes:vRes:version:reserved1:reserved2:)](opencpicparams/1464130-init.md)

### Instance Properties

- [hRes](opencpicparams/1461719-hres.md): The best horizontal resolution for the picture. A value of 0x0048000 specifies a horizontal resolution of 72 dpi.
- [reserved1](opencpicparams/1463913-reserved1.md): Reserved; set to 0.
- [reserved2](opencpicparams/1459077-reserved2.md): Reserved; set to 0.
- [srcRect](opencpicparams/1463268-srcrect.md): The optimal bounding rectangle for the resolution indicated by the `hRes` and `vRes` fields. To display a picture at a resolution other than that specified in the `hRes` and `vRes` fields, your application should compute an appropriate destination rectangle by scaling the image’s width and height by the destination resolution divided by the source resolution.
- [vRes](opencpicparams/1463078-vres.md): The best vertical resolution for the picture. A value of 0x0048000 specifies a vertical resolution of 72 dpi.
- [version](opencpicparams/1462801-version.md): Always set this field to -2.

# OpenCPicParams (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef struct OpenCPicParams {
    ...
} OpenCPicParams;
```

## Topics

### Instance Properties

- [hRes](opencpicparams/1461719-hres.md): The best horizontal resolution for the picture. A value of 0x0048000 specifies a horizontal resolution of 72 dpi.
- [reserved1](opencpicparams/1463913-reserved1.md): Reserved; set to 0.
- [reserved2](opencpicparams/1459077-reserved2.md): Reserved; set to 0.
- [srcRect](opencpicparams/1463268-srcrect.md): The optimal bounding rectangle for the resolution indicated by the `hRes` and `vRes` fields. To display a picture at a resolution other than that specified in the `hRes` and `vRes` fields, your application should compute an appropriate destination rectangle by scaling the image’s width and height by the destination resolution divided by the source resolution.
- [vRes](opencpicparams/1463078-vres.md): The best vertical resolution for the picture. A value of 0x0048000 specifies a vertical resolution of 72 dpi.
- [version](opencpicparams/1462801-version.md): Always set this field to -2.
