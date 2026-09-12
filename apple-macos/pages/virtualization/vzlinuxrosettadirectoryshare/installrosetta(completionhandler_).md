> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettadirectoryshare/installrosetta(completionhandler:)](https://developer.apple.com/documentation/virtualization/vzlinuxrosettadirectoryshare/installrosetta(completionhandler:))

# installRosetta(completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Starts the installation of Rosetta.

## Declaration

```swift
class func installRosetta(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func installRosetta() async throws
```

## Parameters

- `completionHandler`: The completion handler the framework invokes after the request finishes processing.

<a id="Discussion"></a>

## Discussion

The completion handler returns an error object that contains information about a problem, or `nil` if the installation completed successfully.

# installRosettaWithCompletionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Starts the installation of Rosetta.

## Declaration

```objectivec
+ (void) installRosettaWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler the framework invokes after the request finishes processing.

<a id="Discussion"></a>

## Discussion

The completion handler returns an error object that contains information about a problem, or `nil` if the installation completed successfully.
