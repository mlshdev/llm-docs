> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue](https://developer.apple.com/documentation/foundation/nsvalue)

# NSValue (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A simple container for a single C or Objective-C data item.

## Declaration

```swift
class NSValue
```

<a id="overview"></a>

## Overview

An [NSValue](nsvalue.md) object can hold any of the scalar types such as `int`, `float`, and `char`, as well as pointers, structures, and object `id` references. Use this class to work with such data types in collections (such as [NSArray](nsarray.md) and [NSSet](nsset.md)), [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25), and other APIs that require Objective-C objects. [NSValue](nsvalue.md) objects are always immutable.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The abstract [NSValue](nsvalue.md) class is the public interface of a class cluster consisting mostly of private, concrete classes that create and return a value object appropriate for a given situation. It is possible to subclass [NSValue](nsvalue.md), but doing so requires providing storage facilities for the value (which is not inherited by subclasses) and implementing two primitive methods.

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of [NSValue](nsvalue.md) *must* override the primitive instance methods [getValue(\_:)](nsvalue/getvalue%28__%29.md) and [objCType](nsvalue/objctype.md). These methods must operate on the storage that you provide for the value.

You might want to implement an initializer for your subclass that is suited to the storage you provide. The [NSValue](nsvalue.md) class does not have a designated initializer, so your initializer need only invoke the [init()](../objectivec/nsobject-swift.class/init%28%29.md) method of `super`. The [NSValue](nsvalue.md) class adopts the [NSCopying](nscopying.md) and [NSSecureCoding](nssecurecoding.md) protocols; if you want instances of your own custom subclass created from copying or coding, override the methods in these protocols.

You may also wish to implement the [hash](../objectivec/nsobjectprotocol/hash.md) method to make your subclass work well in collections.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

If you need only to use [NSValue](nsvalue.md) objects for wrap a custom data types or structures defined by your app, you need not create an [NSValue](nsvalue.md) subclass. Instead, create a category that uses existing [NSValue](nsvalue.md) methods to store and retrieve data of your custom type. For example, the code below defines a custom Polyhedron structure and creates [NSValue](nsvalue.md) convenience methods to store and retrieve it:

```objc
typedef struct {
    int numFaces;
    float radius;
} Polyhedron;
 
@interface NSValue (Polyhedron)
+ (instancetype)valuewithPolyhedron:(Polyhedron)value;
@property (readonly) Polyhedron polyhedronValue;
@end
 
@implementation NSValue (Polyhedron)
+ (instancetype)valuewithPolyhedron:(Polyhedron)value
{
    return [self valueWithBytes:&value objCType:@encode(Polyhedron)];
}
- (Polyhedron) polyhedronValue
{
    Polyhedron value;
    [self getValue:&value];
    return value;
}
@end
```

## Topics

### Working with Raw Values

- [init(bytes:objCType:)](nsvalue/init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [init(\_:withObjCType:)](nsvalue/init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue(\_:)](nsvalue/getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
- [objCType](nsvalue/objctype.md): A C string containing the Objective-C type of the data contained in the value object.

### Working with Pointer and Object Values

- [init(pointer:)](nsvalue/init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [init(nonretainedObject:)](nsvalue/init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](nsvalue/pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nsvalue/nonretainedobjectvalue.md): The value as a non-retained pointer to an object.

### Working with Range Values

- [init(range:)](nsvalue/init%28range_%29.md): Creates a new value object containing the specified Foundation range structure.
- [rangeValue](nsvalue/rangevalue.md): The Foundation range structure representation of the value.

### Working with Foundation Geometry Values

- [init(point:)](nsvalue/init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [init(size:)](nsvalue/init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [init(rect:)](nsvalue/init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](nsvalue/pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](nsvalue/sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](nsvalue/rectvalue.md): The Foundation rectangle structure representation of the value.

### Working with CoreGraphics Geometry Values

- [init(CGPoint:)](nsvalue/init%28cgpoint_%29.md): Creates a new value object containing the specified CoreGraphics point structure.
- [init(CGVector:)](nsvalue/init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [init(CGSize:)](nsvalue/init%28cgsize_%29.md): Creates a new value object containing the specified CoreGraphics size structure.
- [init(CGRect:)](nsvalue/init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [init(CGAffineTransform:)](nsvalue/init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [cgPointValue](nsvalue/cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [cgVectorValue](nsvalue/cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [cgSizeValue](nsvalue/cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [cgRectValue](nsvalue/cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [cgAffineTransformValue](nsvalue/cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.

### Working with UIKit Geometry Values

- [init(UIEdgeInsets:)](nsvalue/init%28uiedgeinsets_%29.md): Creates a new value object containing the specified UIKit edge insets structure.
- [init(UIOffset:)](nsvalue/init%28uioffset_%29.md): Creates a new value object containing the specified UIKit offset structure.
- [uiEdgeInsetsValue](nsvalue/uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [uiOffsetValue](nsvalue/uioffsetvalue.md): Returns the UIKit offset structure representation of the value.

### Working with CoreAnimation Transform Values

- [init(CATransform3D:)](nsvalue/init%28catransform3d_%29.md): Creates a new value object containing the specified CoreAnimation transform structure.
- [caTransform3DValue](nsvalue/catransform3dvalue.md): The CoreAnimation transform structure representation of the value.

### Working with Media Time Values

- [init(CMTime:)](nsvalue/init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [init(CMTimeRange:)](nsvalue/init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [init(CMTimeMapping:)](nsvalue/init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [timeValue](nsvalue/timevalue.md): The CoreMedia time structure representation of the value.
- [timeRangeValue](nsvalue/timerangevalue.md): The CoreMedia time range structure representation of the value.
- [timeMappingValue](nsvalue/timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

### Working with Geographic Coordinate Values

- [init(MKCoordinate:)](nsvalue/init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [init(MKCoordinateSpan:)](nsvalue/init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [mkCoordinateValue](nsvalue/mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [mkCoordinateSpanValue](nsvalue/mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.

### Working with SceneKit Vector and Matrix Values

- [init(SCNVector3:)](nsvalue/init%28scnvector3_%29.md): Creates a value object that contains the specified three-element SceneKit vector.
- [init(SCNVector4:)](nsvalue/init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [init(SCNMatrix4:)](nsvalue/init%28scnmatrix4_%29.md): Creates a value object that contains the specified SceneKit 4 x 4 matrix.
- [scnVector3Value](nsvalue/scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [scnVector4Value](nsvalue/scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [scnMatrix4Value](nsvalue/scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.

### Comparing Value Objects

- [isEqual(to:)](nsvalue/isequal%28to_%29.md): Returns a Boolean value that indicates whether the value object and another value object are equal.

### Initializers

- [init(CMVideoDimensions:)](nsvalue/init%28cmvideodimensions_%29.md)
- [init(GCPoint2:)](nsvalue/init%28gcpoint2_%29.md)
- [init(coder:)](nsvalue/init%28coder_%29.md)
- [init(directionalEdgeInsets:)](nsvalue/init%28directionaledgeinsets_%29.md)
- [init(edgeInsets:)](nsvalue/init%28edgeinsets_%29.md): Creates a new value object containing the specified edge insets structure.

### Instance Properties

- [directionalEdgeInsetsValue](nsvalue/directionaledgeinsetsvalue.md)
- [edgeInsetsValue](nsvalue/edgeinsetsvalue.md): The edge insets structure representation of the value.
- [gcPoint2Value](nsvalue/gcpoint2value.md)
- [videoDimensionsValue](nsvalue/videodimensionsvalue.md)

### Instance Methods

- [getValue(\_:size:)](nsvalue/getvalue%28__size_%29.md): Copies the value into the specified buffer.
- [value(of:)](nsvalue/value%28of_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSNumber](nsnumber.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Value Wrappers and Transformations

- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [ValueTransformer](valuetransformer.md): An abstract class used to transform values from one representation to another.

# NSValue (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A simple container for a single C or Objective-C data item.

## Declaration

```objectivec
@interface NSValue : NSObject
```

<a id="overview"></a>

## Overview

An [NSValue](nsvalue.md) object can hold any of the scalar types such as `int`, `float`, and `char`, as well as pointers, structures, and object `id` references. Use this class to work with such data types in collections (such as [NSArray](nsarray.md) and [NSSet](nsset.md)), [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25), and other APIs that require Objective-C objects. [NSValue](nsvalue.md) objects are always immutable.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The abstract [NSValue](nsvalue.md) class is the public interface of a class cluster consisting mostly of private, concrete classes that create and return a value object appropriate for a given situation. It is possible to subclass [NSValue](nsvalue.md), but doing so requires providing storage facilities for the value (which is not inherited by subclasses) and implementing two primitive methods.

<a id="Methods-to-Override"></a>

#### Methods to Override

Any subclass of [NSValue](nsvalue.md) *must* override the primitive instance methods [getValue:](nsvalue/getvalue%28__%29.md) and [objCType](nsvalue/objctype.md). These methods must operate on the storage that you provide for the value.

You might want to implement an initializer for your subclass that is suited to the storage you provide. The [NSValue](nsvalue.md) class does not have a designated initializer, so your initializer need only invoke the [init](../objectivec/nsobject-swift.class/init%28%29.md) method of `super`. The [NSValue](nsvalue.md) class adopts the [NSCopying](nscopying.md) and [NSSecureCoding](nssecurecoding.md) protocols; if you want instances of your own custom subclass created from copying or coding, override the methods in these protocols.

You may also wish to implement the [hash](../objectivec/nsobjectprotocol/hash.md) method to make your subclass work well in collections.

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

If you need only to use [NSValue](nsvalue.md) objects for wrap a custom data types or structures defined by your app, you need not create an [NSValue](nsvalue.md) subclass. Instead, create a category that uses existing [NSValue](nsvalue.md) methods to store and retrieve data of your custom type. For example, the code below defines a custom Polyhedron structure and creates [NSValue](nsvalue.md) convenience methods to store and retrieve it:

```objc
typedef struct {
    int numFaces;
    float radius;
} Polyhedron;
 
@interface NSValue (Polyhedron)
+ (instancetype)valuewithPolyhedron:(Polyhedron)value;
@property (readonly) Polyhedron polyhedronValue;
@end
 
@implementation NSValue (Polyhedron)
+ (instancetype)valuewithPolyhedron:(Polyhedron)value
{
    return [self valueWithBytes:&value objCType:@encode(Polyhedron)];
}
- (Polyhedron) polyhedronValue
{
    Polyhedron value;
    [self getValue:&value];
    return value;
}
@end
```

## Topics

### Working with Raw Values

- [initWithBytes:objCType:](nsvalue/init%28bytes_objctype_%29.md): Initializes a value object to contain the specified value, interpreted with the specified Objective-C type.
- [valueWithBytes:objCType:](nsvalue/valuewithbytes_objctype_.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [value:withObjCType:](nsvalue/init%28__withobjctype_%29.md): Creates a value object containing the specified value, interpreted with the specified Objective-C type.
- [getValue:](nsvalue/getvalue%28__%29.md): Deprecated. Copies the value into the specified buffer.
- [objCType](nsvalue/objctype.md): A C string containing the Objective-C type of the data contained in the value object.

### Working with Pointer and Object Values

- [valueWithPointer:](nsvalue/init%28pointer_%29.md): Creates a value object containing the specified pointer.
- [valueWithNonretainedObject:](nsvalue/init%28nonretainedobject_%29.md): Creates a value object containing the specified object.
- [pointerValue](nsvalue/pointervalue.md): Returns the value as an untyped pointer.
- [nonretainedObjectValue](nsvalue/nonretainedobjectvalue.md): The value as a non-retained pointer to an object.

### Working with Range Values

- [valueWithRange:](nsvalue/init%28range_%29.md): Creates a new value object containing the specified Foundation range structure.
- [rangeValue](nsvalue/rangevalue.md): The Foundation range structure representation of the value.

### Working with Foundation Geometry Values

- [valueWithPoint:](nsvalue/init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [valueWithSize:](nsvalue/init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [valueWithRect:](nsvalue/init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](nsvalue/pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](nsvalue/sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](nsvalue/rectvalue.md): The Foundation rectangle structure representation of the value.

### Working with CoreGraphics Geometry Values

- [valueWithCGPoint:](nsvalue/init%28cgpoint_%29.md): Creates a new value object containing the specified CoreGraphics point structure.
- [valueWithCGVector:](nsvalue/init%28cgvector_%29.md): Creates a new value object containing the specified CoreGraphics vector structure.
- [valueWithCGSize:](nsvalue/init%28cgsize_%29.md): Creates a new value object containing the specified CoreGraphics size structure.
- [valueWithCGRect:](nsvalue/init%28cgrect_%29.md): Creates a new value object containing the specified CoreGraphics rectangle structure.
- [valueWithCGAffineTransform:](nsvalue/init%28cgaffinetransform_%29.md): Creates a new value object containing the specified CoreGraphics affine transform structure.
- [CGPointValue](nsvalue/cgpointvalue.md): Returns the CoreGraphics point structure representation of the value.
- [CGVectorValue](nsvalue/cgvectorvalue.md): Returns the CoreGraphics vector structure representation of the value.
- [CGSizeValue](nsvalue/cgsizevalue.md): Returns the CoreGraphics size structure representation of the value.
- [CGRectValue](nsvalue/cgrectvalue.md): Returns the CoreGraphics rectangle structure representation of the value.
- [CGAffineTransformValue](nsvalue/cgaffinetransformvalue.md): Returns the CoreGraphics affine transform representation of the value.

### Working with UIKit Geometry Values

- [valueWithUIEdgeInsets:](nsvalue/init%28uiedgeinsets_%29.md): Creates a new value object containing the specified UIKit edge insets structure.
- [valueWithUIOffset:](nsvalue/init%28uioffset_%29.md): Creates a new value object containing the specified UIKit offset structure.
- [UIEdgeInsetsValue](nsvalue/uiedgeinsetsvalue.md): Returns the UIKit edge insets structure representation of the value.
- [UIOffsetValue](nsvalue/uioffsetvalue.md): Returns the UIKit offset structure representation of the value.

### Working with CoreAnimation Transform Values

- [valueWithCATransform3D:](nsvalue/init%28catransform3d_%29.md): Creates a new value object containing the specified CoreAnimation transform structure.
- [CATransform3DValue](nsvalue/catransform3dvalue.md): The CoreAnimation transform structure representation of the value.

### Working with Media Time Values

- [valueWithCMTime:](nsvalue/init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [valueWithCMTimeRange:](nsvalue/init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [valueWithCMTimeMapping:](nsvalue/init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [CMTimeValue](nsvalue/timevalue.md): The CoreMedia time structure representation of the value.
- [CMTimeRangeValue](nsvalue/timerangevalue.md): The CoreMedia time range structure representation of the value.
- [CMTimeMappingValue](nsvalue/timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

### Working with Geographic Coordinate Values

- [valueWithMKCoordinate:](nsvalue/init%28mkcoordinate_%29.md): Creates a new value object containing the specified CoreLocation geographic coordinate structure.
- [valueWithMKCoordinateSpan:](nsvalue/init%28mkcoordinatespan_%29.md): Creates a new value object containing the specified MapKit coordinate span structure.
- [MKCoordinateValue](nsvalue/mkcoordinatevalue.md): The CoreLocation geographic coordinate structure representation of the value.
- [MKCoordinateSpanValue](nsvalue/mkcoordinatespanvalue.md): The MapKit coordinate span structure representation of the value.

### Working with SceneKit Vector and Matrix Values

- [valueWithSCNVector3:](nsvalue/init%28scnvector3_%29.md): Creates a value object that contains the specified three-element SceneKit vector.
- [valueWithSCNVector4:](nsvalue/init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [valueWithSCNMatrix4:](nsvalue/init%28scnmatrix4_%29.md): Creates a value object that contains the specified SceneKit 4 x 4 matrix.
- [SCNVector3Value](nsvalue/scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [SCNVector4Value](nsvalue/scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [SCNMatrix4Value](nsvalue/scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.

### Comparing Value Objects

- [isEqualToValue:](nsvalue/isequal%28to_%29.md): Returns a Boolean value that indicates whether the value object and another value object are equal.

### Instance Properties

- [directionalEdgeInsetsValue](nsvalue/directionaledgeinsetsvalue.md)
- [edgeInsetsValue](nsvalue/edgeinsetsvalue.md): The edge insets structure representation of the value.
- [GCPoint2Value](nsvalue/gcpoint2value.md)
- [CMVideoDimensionsValue](nsvalue/videodimensionsvalue.md)

### Instance Methods

- [getValue:size:](nsvalue/getvalue%28__size_%29.md): Copies the value into the specified buffer.
- [initWithCoder:](nsvalue/init%28coder_%29.md)

### Type Methods

- [valueWithCMVideoDimensions:](nsvalue/init%28cmvideodimensions_%29.md)
- [valueWithGCPoint2:](nsvalue/init%28gcpoint2_%29.md)
- [valueWithDirectionalEdgeInsets:](nsvalue/init%28directionaledgeinsets_%29.md)
- [valueWithEdgeInsets:](nsvalue/init%28edgeinsets_%29.md): Creates a new value object containing the specified edge insets structure.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSNumber](nsnumber.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Value Wrappers and Transformations

- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSValueTransformer](valuetransformer.md): An abstract class used to transform values from one representation to another.
