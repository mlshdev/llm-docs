> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/systempackageprovider](https://developer.apple.com/documentation/packagedescription/systempackageprovider)

# SystemPackageProvider

**Framework:** PackageDescription  
**Kind:** Enumeration

The system package providers that this package uses.

## Declaration

```swift
enum SystemPackageProvider
```

## Topics

### Providing Hints to Users of System Packages

- [apt(\_:)](systempackageprovider/apt%28__%29.md): Creates a system package provider with a list of installable packages for users of the apt-get package manager on Ubuntu Linux.
- [brew(\_:)](systempackageprovider/brew%28__%29.md): Creates a system package provider with a list of installable packages for people who use the HomeBrew package manager on macOS.
- [nuget(\_:)](systempackageprovider/nuget%28__%29.md): Creates a system package provider with a list of installable packages for users of the NuGet package manager on Linux or Windows.
- [yum(\_:)](systempackageprovider/yum%28__%29.md): Creates a system package provider with a list of installable packages for users of the yum package manager on Red Hat Enterprise Linux or CentOS.

### Enumeration Cases

- [SystemPackageProvider.aptItem(\_:)](systempackageprovider/aptitem%28__%29.md): Packages installable by the apt-get package manager.
- [SystemPackageProvider.brewItem(\_:)](systempackageprovider/brewitem%28__%29.md): Packages installable by the HomeBrew package manager.
- [SystemPackageProvider.nugetItem(\_:)](systempackageprovider/nugetitem%28__%29.md): Packages installable by the NuGet package manager.
- [SystemPackageProvider.yumItem(\_:)](systempackageprovider/yumitem%28__%29.md): Packages installable by the Yellowdog Updated, Modified (YUM) package manager.

## See Also

### Configuring System Packages

- [pkgConfig](package/pkgconfig.md): The name to use for C modules.
- [providers](package/providers.md): An array of providers for a system target.
