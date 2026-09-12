> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionnamed/init(name:)](https://developer.apple.com/documentation/pdfkit/pdfactionnamed/init(name:))

# init(name:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the `PDFActionName` object with the specified named action.

## Declaration

```swift
init(name: PDFActionNamedName)
```

## Parameters

- `name`: The action name used to initialize the named action.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionNamed` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

See [PDFActionNamed](../pdfactionnamed.md) for the names of named actions you can specify.

# initWithName: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Initializes the `PDFActionName` object with the specified named action.

## Declaration

```objectivec
- (instancetype) initWithName:(PDFActionNamedName) name;
```

## Parameters

- `name`: The action name used to initialize the named action.

<a id="return-value"></a>

## Return Value

An initialized `PDFActionNamed` instance, or `NULL` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

See [PDFActionNamed](../pdfactionnamed.md) for the names of named actions you can specify.
