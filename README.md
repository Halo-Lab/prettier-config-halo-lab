# Halo lab prettier config 

## Installation
```bash
npm install --save-dev prettier prettier-config-halo-lab @trivago/prettier-plugin-sort-imports 
```

## Usage
In `package.json`:

```json
{
  "prettier": "prettier-config-halo-lab"
}
```

## Details

Imports will be sorted in that order:

```
1 Those which imported from node_modules;
2 Imports which begins with "@/" and NOT ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
3 Imports which begins with "./" and NOT ends with one of: .scss, .css, .svg, .png, .jpg, .jpeg, .gif, .webp;
4 Imports which begins with any symbol AND ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
5 Imports which begins with "./" or "../" AND ends with ".css" or ".scss";
```
## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
