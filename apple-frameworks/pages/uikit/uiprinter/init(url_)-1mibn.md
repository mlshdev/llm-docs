> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinter/init(url:)-1mibn](https://developer.apple.com/documentation/uikit/uiprinter/init(url:)-1mibn)

# init(url:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and returns a printer with the specified location.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: A URL that identifies the location of the printer on your network.

<a id="return-value"></a>

## Return Value

A printer object representing the specified printer or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

Use this method to create printer objects for printers whose address you already know. The printer does not need to be online or available when you call this method. The URL you specify is stored in the returned object so that you can contact the printer later using the [contactPrinter(\_:)](contactprinter%28__%29.md) method.

# printerWithURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and returns a printer with the specified location.

## Declaration

```objectivec
+ (UIPrinter *) printerWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL that identifies the location of the printer on your network.

<a id="return-value"></a>

## Return Value

A printer object representing the specified printer or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

Use this method to create printer objects for printers whose address you already know. The printer does not need to be online or available when you call this method. The URL you specify is stored in the returned object so that you can contact the printer later using the [contactPrinter:](contactprinter%28__%29.md) method.
