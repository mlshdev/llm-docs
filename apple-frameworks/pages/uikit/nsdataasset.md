> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdataasset](https://developer.apple.com/documentation/uikit/nsdataasset)

# NSDataAsset (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object from a data set type stored in an asset catalog.

## Declaration

```swift
class NSDataAsset
```

<a id="overview"></a>

## Overview

The object’s content is stored as a set of one or more files with associated device attributes. These sets can also be tagged for use as on-demand resources.

<a id="Initialize-data-assets"></a>

### Initialize data assets

Data assets are initialized from a named data set in an asset catalog. You create data sets during app development. Each data set contains one or more data files. Each file has associated attributes for features of the device, including the minimum amount of memory and the version of Metal. When you initialize the data asset, the system selects the data file that best matches the current device.

For more information on the data set type in an asset catalog, see [Data Set Type](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/DataSetType.html#//apple_ref/doc/uid/TP40015170-CH23) in [Asset Catalog Format Reference](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/index.html#//apple_ref/doc/uid/TP40015170). For information on asset catalogs, see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs).

<a id="Access-the-data"></a>

### Access the data

You access the data file by using the [data](nsdataasset/data.md) property. Because the property is of type [NSData](../foundation/nsdata.md) it provides methods for accessing the raw data only as bytes and ranges of bytes.

To access structured data, convert the bytes into the appropriate format. The system can convert some data types for you. One example is XML data using the [init(data:)](../foundation/xmlparser/init%28data_%29.md) method of [XMLParser](../foundation/xmlparser.md). Other data types require code for parsing and converting the raw data. You may need to convert larger data files incrementally.

## Topics

### Initializing the data asset

- [init(name:)](nsdataasset/init%28name_%29.md): Initializes and returns an object with a reference to the named data asset in an asset catalog.
- [init(name:bundle:)](nsdataasset/init%28name_bundle_%29.md): Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

### Accessing data

- [data](nsdataasset/data.md): The raw data values in the data asset.

### Getting data asset information

- [name](nsdataasset/name.md): The name of the data set in the asset catalog.
- [NSDataAssetName](nsdataassetname.md): The name of a data asset.
- [typeIdentifier](nsdataasset/typeidentifier.md): The uniform type identifier for the data asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assets

- [UIImageAsset](uiimageasset.md): A container for a collection of images that represent multiple ways of describing a single piece of artwork.

# NSDataAsset (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object from a data set type stored in an asset catalog.

## Declaration

```objectivec
@interface NSDataAsset : NSObject
```

<a id="overview"></a>

## Overview

The object’s content is stored as a set of one or more files with associated device attributes. These sets can also be tagged for use as on-demand resources.

<a id="Initialize-data-assets"></a>

### Initialize data assets

Data assets are initialized from a named data set in an asset catalog. You create data sets during app development. Each data set contains one or more data files. Each file has associated attributes for features of the device, including the minimum amount of memory and the version of Metal. When you initialize the data asset, the system selects the data file that best matches the current device.

For more information on the data set type in an asset catalog, see [Data Set Type](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/DataSetType.html#//apple_ref/doc/uid/TP40015170-CH23) in [Asset Catalog Format Reference](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/index.html#//apple_ref/doc/uid/TP40015170). For information on asset catalogs, see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs).

<a id="Access-the-data"></a>

### Access the data

You access the data file by using the [data](nsdataasset/data.md) property. Because the property is of type [NSData](../foundation/nsdata.md) it provides methods for accessing the raw data only as bytes and ranges of bytes.

To access structured data, convert the bytes into the appropriate format. The system can convert some data types for you. One example is XML data using the [initWithData:](../foundation/xmlparser/init%28data_%29.md) method of [NSXMLParser](../foundation/xmlparser.md). Other data types require code for parsing and converting the raw data. You may need to convert larger data files incrementally.

## Topics

### Initializing the data asset

- [initWithName:](nsdataasset/init%28name_%29.md): Initializes and returns an object with a reference to the named data asset in an asset catalog.
- [initWithName:bundle:](nsdataasset/init%28name_bundle_%29.md): Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

### Accessing data

- [data](nsdataasset/data.md): The raw data values in the data asset.

### Getting data asset information

- [name](nsdataasset/name.md): The name of the data set in the asset catalog.
- [NSDataAssetName](nsdataassetname.md): The name of a data asset.
- [typeIdentifier](nsdataasset/typeidentifier.md): The uniform type identifier for the data asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Assets

- [UIImageAsset](uiimageasset.md): A container for a collection of images that represent multiple ways of describing a single piece of artwork.
