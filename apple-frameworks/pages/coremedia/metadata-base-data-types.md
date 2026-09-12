> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/metadata-base-data-types](https://developer.apple.com/documentation/coremedia/metadata-base-data-types)

# Metadata Base Data Types

**Interface languages:** Swift, Objective-C

**Framework:** Core Media  
**Kind:** API Collection

Constants that describe metadata base data types.

## Topics

### Constants

- [kCMMetadataBaseDataType_RawData](kcmmetadatabasedatatype_rawdata.md): A sequence of bytes whose interpretation based upon an agreement between the reader and the writer.
- [kCMMetadataBaseDataType_UTF8](kcmmetadatabasedatatype_utf8.md): UTF-8 string.
- [kCMMetadataBaseDataType_UTF16](kcmmetadatabasedatatype_utf16.md): UTF-16 string.
- [kCMMetadataBaseDataType_GIF](kcmmetadatabasedatatype_gif.md): GIF image.
- [kCMMetadataBaseDataType_JPEG](kcmmetadatabasedatatype_jpeg.md): JPEG image.
- [kCMMetadataBaseDataType_PNG](kcmmetadatabasedatatype_png.md): PNG image.
- [kCMMetadataBaseDataType_BMP](kcmmetadatabasedatatype_bmp.md): BMP image.
- [kCMMetadataBaseDataType_Float32](kcmmetadatabasedatatype_float32.md): 32-bit big endian floating point number.
- [kCMMetadataBaseDataType_Float64](kcmmetadatabasedatatype_float64.md): 64-bit big endian floating point number.
- [kCMMetadataBaseDataType_SInt8](kcmmetadatabasedatatype_sint8.md): 8-bit signed integer.
- [kCMMetadataBaseDataType_SInt16](kcmmetadatabasedatatype_sint16.md): 16-bit big endian signed integer.
- [kCMMetadataBaseDataType_SInt32](kcmmetadatabasedatatype_sint32.md): 32-bit big endian signed integer.
- [kCMMetadataBaseDataType_SInt64](kcmmetadatabasedatatype_sint64.md): 64-bit big endian signed integer.
- [kCMMetadataBaseDataType_UInt8](kcmmetadatabasedatatype_uint8.md): 8-bit unsigned integer.
- [kCMMetadataBaseDataType_UInt16](kcmmetadatabasedatatype_uint16.md): 16-bit big endian unsigned integer.
- [kCMMetadataBaseDataType_UInt32](kcmmetadatabasedatatype_uint32.md): 32-bit big endian unsigned integer.
- [kCMMetadataBaseDataType_UInt64](kcmmetadatabasedatatype_uint64.md): 64-bit big endian unsigned integer.
- [kCMMetadataBaseDataType_PointF32](kcmmetadatabasedatatype_pointf32.md): Consists of two 32-bit big endian floating point values, the x and y values, respectively.
- [kCMMetadataBaseDataType_DimensionsF32](kcmmetadatabasedatatype_dimensionsf32.md): Consists of a 32-bit big endian floating point x value followed by a 32-bit floating point y value.
- [kCMMetadataBaseDataType_RectF32](kcmmetadatabasedatatype_rectf32.md): Consists of four 32-bit big endian floating point values, the origin’s x, origin’s y, width and height values, respectively. May also be interpreted as a 32-bit floating point origin followed by a 32-bit floating point dimension.
- [kCMMetadataBaseDataType_AffineTransformF64](kcmmetadatabasedatatype_affinetransformf64.md): A type that identifies a 3x3 matrix of 64-bit big endian floating point numbers in a row-major order that specify an affine transform.
- [kCMMetadataBaseDataType_PerspectiveTransformF64](kcmmetadatabasedatatype_perspectivetransformf64.md): A 3x3 matrix of 64-bit big endian floating point numbers the system stores in row-major order that specify a perspective transform.
- [kCMMetadataBaseDataType_PolygonF32](kcmmetadatabasedatatype_polygonf32.md): Three or more pairs of 32-bit floating point numbers (x and y values) that define the vertices of a polygon.
- [kCMMetadataBaseDataType_PolylineF32](kcmmetadatabasedatatype_polylinef32.md): Two or more pairs of 32-bit floating point numbers (x and y values) that define a multi-segmented line.
- [kCMMetadataBaseDataType_JSON](kcmmetadatabasedatatype_json.md): UTF-8 encoded JSON data.

## See Also

### Constants

- [Metadata Identifier Error Codes](metadata-identifier-errors.md): Error codes that indicate metadata identifier errors.
- [Metadata Registry Error Codes](metadata-registry-errors.md): Error codes that indicate metadata registry errors.
- [Metadata Identifier Keyspaces](metadata-identifier-keyspaces.md): Constants that describe metadata identifier keyspaces.
- [Metadata Identifiers](metadata-identifiers.md): Constants that describe metadata identifiers.
- [Metadata Data Types](metadata-data-types.md): Constants that describe metadata data types.
