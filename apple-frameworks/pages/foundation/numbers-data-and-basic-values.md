> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numbers-data-and-basic-values](https://developer.apple.com/documentation/foundation/numbers-data-and-basic-values)

# Numbers, Data, and Basic Values (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Work with primitive values and other fundamental types used throughout Cocoa.

## Topics

### Numbers

- [Int](https://developer.apple.com/documentation/swift/int): A signed integer value type.
- [Double](https://developer.apple.com/documentation/swift/double): A double-precision (64-bit), floating-point value type.
- [Decimal](decimal.md): A structure representing a base-10 number.
- [NumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.

### Binary Data

- [Data](data.md): A byte buffer in memory.
- [DataProtocol](dataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous data buffers.
- [MutableDataProtocol](mutabledataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous mutable data buffers.
- [ContiguousBytes](contiguousbytes.md): A protocol that declares the type offers direct access to the underlying raw bytes in a contiguous manner.

### URLs

- [URL](url.md): A value that identifies the location of a resource, such as an item on a remote server or the path to a local file.
- [URLComponents](urlcomponents.md): A structure that parses URLs into and constructs URLs from their constituent parts.
- [URLQueryItem](urlqueryitem.md): A single name-value pair from the query portion of a URL.

### Unique Identifiers

- [UUID](uuid.md): A universally unique value to identify types, interfaces, and other items.

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [AffineTransform](affinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.

### Ranges

- [NSRange](nsrange-swift.typealias.md): A structure used to describe a portion of a series, such as characters in a string or objects in an array.

## See Also

### Fundamentals

- [Strings and Text](strings-and-text.md): Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.
- [Filters and Sorting](filters-and-sorting.md): Use predicates, expressions, and sort descriptors to examine elements in collections and other services.

# Numbers, Data, and Basic Values (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Work with primitive values and other fundamental types used throughout Cocoa.

## Topics

### Numbers

- [NSInteger](../objectivec/nsinteger.md): Describes an integer.
- [NSUInteger](../objectivec/nsuinteger.md): Describes an unsigned integer.
- [NSDecimal](decimal.md): A structure representing a base-10 number.
- [NSDecimalNumber](nsdecimalnumber.md): An object for representing and performing arithmetic on base-10 numbers.
- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSNumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.

### Binary Data

- [NSData](nsdata.md): A static byte buffer in memory.
- [NSMutableData](nsmutabledata.md): An object representing a dynamic byte buffer in memory.

### URLs

- [NSURL](nsurl.md): An object that represents the location of a resource, such as an item on a remote server or the path to a local file.
- [NSURLComponents](nsurlcomponents.md): An object that parses URLs into and constructs URLs from their constituent parts.
- [NSURLQueryItem](nsurlqueryitem.md): An object representing a single name/value pair for an item in the query portion of a URL.

### Unique Identifiers

- [NSUUID](nsuuid.md): A universally unique value that can be used to identify types, interfaces, and other items.

### Geometry

- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSRect](nsrect.md): A rectangle.
- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.

### Ranges

- [NSRange](nsrange-c.struct.md): A structure used to describe a portion of a series, such as characters in a string or objects in an array.

## See Also

### Fundamentals

- [Strings and Text](strings-and-text.md): Create and process strings of Unicode characters, use regular expressions to find patterns, and perform natural language analysis of text.
- [Collections](collections.md): Use arrays, dictionaries, sets, and specialized collections to store and iterate groups of objects or values.
- [Dates and Times](dates-and-times.md): Compare dates and times, and perform calendar and time zone calculations.
- [Units and Measurement](units-and-measurement.md): Label numeric quantities with physical dimensions to allow locale-aware formatting and conversion between related units.
- [Data Formatting](data-formatting.md): Convert numbers, dates, measurements, and other values to and from locale-aware string representations.
- [Filters and Sorting](filters-and-sorting.md): Use predicates, expressions, and sort descriptors to examine elements in collections and other services.
