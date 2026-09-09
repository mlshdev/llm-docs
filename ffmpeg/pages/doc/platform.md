> Commit-pinned source for FFmpeg master: [doc/platform.texi](https://github.com/FFmpeg/FFmpeg/blob/903325e279b67156c3aa1f06ec5cb2378d9d004d/doc/platform.texi)

# Unix-like

## Advanced linking configuration

If you compiled FFmpeg libraries statically and you want to use them to
build your own shared library, you may need to force PIC support (with
`--enable-pic` during FFmpeg configure) and add the following option
to your project LDFLAGS:

```text
-Wl,-Bsymbolic
```

If your target platform requires position independent binaries, you should
pass the correct linking flag (e.g. `-pie`) to `--extra-ldexeflags`.

## BSD

BSD make will not build FFmpeg, you need to install and use GNU Make
(`gmake`).

## (Open)Solaris

GNU Make is required to build FFmpeg, so you have to invoke (`gmake`),
standard Solaris Make will not work.

<a id="darwin"></a>

## Darwin (Mac OS X, iPhone)

The toolchain provided with Xcode is sufficient to build the basic
unaccelerated code.

macOS on x86 requires `nasm` to build most of the
optimized assembly functions.
[Gentoo Prefix](https://wiki.gentoo.org/wiki/Project:Prefix),
[Homebrew](https://brew.sh/)
or [MacPorts](https://www.macports.org) can easily provide it.

# DOS

Using a cross-compiler is preferred for various reasons.
<http://www.delorie.com/howto/djgpp/linux-x-djgpp.html>

# OS/2

For information about compiling FFmpeg on OS/2 see
<http://www.edm2.com/index.php/FFmpeg>.

# Windows

## Native Windows compilation using MinGW or MinGW-w64

FFmpeg can be built to run natively on Windows using the MinGW-w64
toolchain. Install the latest versions of MSYS2 and MinGW-w64 from
<https://www.msys2.org/> and/or <https://www.mingw-w64.org/>.
You can find detailed installation instructions in the download section and
the FAQ.

Notes:

- Building for the MSYS environment is discouraged, use one of the
  MinGW-w64 environments provided by MSYS2 instead. UCRT64 provides a GCC
  based toolchain, CLANG64 a LLVM based one and CLANGARM64 targets Windows
  on ARM64.

- Building using MSYS2 can be sped up by disabling implicit rules in the
  Makefile by calling `make -r` instead of plain `make`. This
  speed up is close to non-existent for normal one-off builds and is only
  noticeable when running make for a second time (for example during
  `make install`).

- In order to compile FFplay, you must have the MinGW development library
  of [SDL](http://www.libsdl.org/) and `pkg-config` installed.

- By using `./configure --enable-shared` when configuring FFmpeg,
  you can build the FFmpeg libraries (e.g. libavutil, libavcodec,
  libavformat) as DLLs.

### Native Windows compilation using MSYS2

The MSYS2 MinGW-w64 environments provide ready to use toolchains and
dependencies through `pacman`.

Launch the shell of the environment you want to build in using its
launcher, for example `ucrt64.exe` or the corresponding start menu
shortcut for UCRT64. Then install the toolchain and the FFmpeg
dependencies. The `pacboy` wrapper from the `pactoys`
package fills in the package name prefix of the current environment, so
the same command works in every environment.

```text
# normal msys2 packages
pacman -S make pkgconf diffutils pactoys

# mingw-w64 packages and toolchains for the current environment
pacboy -S cc nasm SDL2
```

## Microsoft Visual C++ or Intel C++ Compiler for Windows

FFmpeg can be built with MSVC 2019 16.8 or later, the first version able to
compile C11.

You will need the following prerequisites:

- [MSYS2](https://www.msys2.org/)
- [NASM](https://www.nasm.us/)
  (Also available via MSYS2's package manager.)

To set up a proper environment in MSYS2, you need to run
`msys2_shell.cmd -use-full-path` from the Visual Studio or Intel Compiler
command prompt.

Place `nasm.exe` somewhere in your `PATH`.

Next, make sure any other headers and libs you want to use, such as zlib, are
located in a spot that the compiler can see. Do so by modifying the `LIB`
and `INCLUDE` environment variables to include the **Windows-style**
paths to these directories. Alternatively, you can try to use the
`--extra-cflags`/`--extra-ldflags` configure options.

Finally, run:

```text
For MSVC:
./configure --toolchain=msvc

For ICL:
./configure --toolchain=icl

make
make install
```

If you wish to compile shared libraries, add `--enable-shared` to your
configure options. Note that due to the way MSVC and ICL handle DLL imports and
exports, you cannot compile static and shared libraries at the same time, and
enabling shared libraries will automatically disable the static ones.

Notes:

- If you wish to build with zlib support, you will have to grab a compatible
  zlib binary from somewhere, with an MSVC import lib, or if you wish to link
  statically, you can follow the instructions below to build a compatible
  `zlib.lib` with MSVC. Regardless of which method you use, you must still
  follow step 3, or compilation will fail.
  - Grab the [zlib sources](http://zlib.net/).
  - Edit `win32/Makefile.msc` so that it uses -MT instead of -MD, since
    this is how FFmpeg is built as well.
  - Edit `zconf.h` and remove its inclusion of `unistd.h`. This gets
    erroneously included when building FFmpeg.
  - Run `nmake -f win32/Makefile.msc`.
  - Move `zlib.lib`, `zconf.h`, and `zlib.h` to somewhere MSVC
    can see.

### Linking to FFmpeg with Microsoft Visual C++

If you plan to link with MSVC-built static libraries, you will need
to make sure you have `Runtime Library` set to
`Multi-threaded (/MT)` in your project's settings.

If you plan on using import libraries created by dlltool, you must
set `References` to `No (/OPT:NOREF)` under the linker optimization
settings, otherwise the resulting binaries will fail during runtime.
This is not required when using import libraries generated by `lib.exe`.
This issue is reported upstream at
<http://sourceware.org/bugzilla/show_bug.cgi?id=12633>.

To create import libraries that work with the `/OPT:REF` option
(which is enabled by default in Release mode), follow these steps:

- Open the *Visual Studio Command Prompt*.

Alternatively, in a normal command line prompt, call `vcvarsall.bat`
which sets up the environment variables for the Visual C++ tools.

- Enter the `bin` directory where the created LIB and DLL files
  are stored.

- Generate new import libraries with `lib.exe`:

```text
lib /machine:i386 /def:..\lib\foo-version.def  /out:foo.lib
```

Replace `foo-version` and `foo` with the respective library names.

<a id="cross-compilation-for-windows-with-linux"></a>

## Cross compilation for Windows with Linux

You must use the MinGW-w64 cross compilation tools, which most Linux
distributions provide as packages.

Then configure FFmpeg with the following options:

```text
./configure --arch=x86_64 --target-os=mingw32 --cross-prefix=x86_64-w64-mingw32-
```

(you can change the cross-prefix according to the prefix chosen for the
MinGW-w64 tools).

Then you can easily test FFmpeg with [Wine](https://www.winehq.org/).

## Compilation under Cygwin

Install your Cygwin with all the "Base" packages, plus the
following "Devel" ones:

```text
binutils, gcc-core, make, git, texinfo
```

In order to run FATE you will also need the following "Utils" packages:

```text
diffutils
```

If you want to build FFmpeg with additional libraries, download Cygwin
"Devel" packages for Ogg and Vorbis from any Cygwin packages repository:

```text
libogg-devel, libvorbis-devel
```

## Crosscompilation for Windows under Cygwin

With Cygwin you can create Windows binaries that do not need the cygwin1.dll.

Just install your Cygwin as explained before, plus the MinGW-w64 cross
toolchain "Devel" packages:

```text
mingw64-x86_64-gcc-core, mingw64-x86_64-binutils
```

and configure with:

```text
./configure --arch=x86_64 --target-os=mingw32 --cross-prefix=x86_64-w64-mingw32-
```

## ARM64EC

FFmpeg does not intend to support the Windows ARM64EC build configuration;
patches for changing the individual libraries for the purposes of ARM64EC will
not be accepted.

It may still be possible to build FFmpeg in this build configuration;
such a build may seem to work to some extent. Such a build may have some
amounts of ABI inconsistencies though - which we are not willing to fix.

(Changing aarch64 assembly code to strictly support ARM64EC would require
ifdeffing/changing essentially all such assembly code, and would be a
huge maintenance burden. Additionally, changing the library ABI
surfaces to fix ABI inconsistencies could require extensive and intrusive
changes.)
